import { WebSocket, WebSocketServer } from "ws";
import {WS_PORT} from '@repo/config-package/config';

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

wss.on('connection', (ws, req) => {
    ws.send("Connected to ws server successfully!");
    const url = req.url;
    if (!url || !url.includes("?")) {
        ws.close(1008, "Unauthorized");
        return;
    }
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get('token');
    
    users.push({
        ws,
        rooms: [],
        userId: 'userId'
    });

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
    })
});