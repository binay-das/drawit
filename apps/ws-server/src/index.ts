import { WebSocket, WebSocketServer } from "ws";
import {JWT_SECRET, WS_PORT} from '@repo/config-package/config';
import jwt  from "jsonwebtoken";
import {prismaClient} from '@repo/db/db'

const wss = new WebSocketServer({
    // port: Number(WS_PORT) 
    port: 8080
});

interface User {
    ws: WebSocket,
    rooms: string[],
    userId: string
}

const users: User[] = [];

const checkUser = (token: string): string | null => {
    const decoded = jwt.verify(token, JWT_SECRET as string);
    if (typeof decoded == "string") {
        return null;
    }
    if (!decoded || !decoded.userId) {
        return null;
    }
    return decoded.userId;
}

wss.on('connection', (ws, req) => {
    ws.send("Connected to ws server successfully!");
    const url = req.url;
    if (!url || !url.includes("?")) {
        ws.close(1008, "Unauthorized");
        return;
    }
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get('token') || "";
    
    const userId = checkUser(token);
    if (!userId) {
        ws.close();
    }
    
    if (userId) {
        users.push({
            ws,
            rooms: [],
            userId 
        });
    }

    ws.on('message', async (msg) => {
        console.log(`Received message: ${msg}`);
        const parsedMsg = JSON.parse(msg.toString());

        if (parsedMsg.type === 'join') {
            const user = users.find(x => x.ws === ws);
            user?.rooms.push(parsedMsg.roomId);
        }

        if (parsedMsg.type === 'leave') {
            const user = users.find(x => x.ws === ws);
            if (!user) return;

            user.rooms = user.rooms.filter(x => x !== parsedMsg.roomId);
        }

        if (parsedMsg.type === "chat") {
            const roomId = parsedMsg.roomId;
            const message = parsedMsg.message;
            
            await prismaClient.chat.create({
                data: {
                    roomId,
                    message,
                    userId: Number(userId)
                }
            });
    
            users.forEach(user => {
                if (user.rooms.includes(roomId)) {
                    user.ws.send(JSON.stringify({
                        type: "chat",
                        message,
                        roomId
                    }))
                }
            })
        }
    })
});