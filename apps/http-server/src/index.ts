import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prismaClient } from '@repo/db/db';
import { JWT_SECRET, PORT } from '@repo/config-package/config'
import { SignUpSchema, SignInSchema, CreateRoomSchema } from '@repo/common-package/zodSchema'
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        server: 'Server is working fine',
        message: 'Hello World!'
    });
});

app.post('/api/v1/signup', async (req, res) => {
    const result = SignUpSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({ msg: 'Invalid request' });
        return;
    }
    const { username, password, name } = req.body;
    try {
        const user = await prismaClient.user.findFirst({
            where: {
                username
            }
        });
        if (user) {
            res.status(400).json({ msg: 'Username already exists!' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prismaClient.user.create({
            data: {
                username,
                password: hashedPassword,
                name
            }
        })
        const { password: _, ...excludePassword } = newUser;
        res.status(200).json({
            message: 'SignUp successfull',
            user: excludePassword
        });
        return;

    } catch (error) {
        res.status(500).json({ msg: 'Internal server error', error: error });
    }

});
app.post('/api/v1/signin', async (req, res) => {
    const result = SignInSchema.safeParse(req.body);
    if (!result.success) {
        res.status(400).json({ msg: 'Invalid request' });
        return;
    }
    const { username, password } = req.body;
    try {
        const user = await prismaClient.user.findFirst({
            where: {
                username
            }
        });
        if (!user) {
            res.status(401).json({ msg: 'Invalid username or password' });
            return;
        }
        const isPassowrdMatch = await bcrypt.compare(password, user.password);
        if (!isPassowrdMatch) {
            res.status(401).json({ msg: 'Invalid username or password' });
            return;
        }
        const token = jwt.sign({
            userId: user.id
        },
            JWT_SECRET as string,
            {
                expiresIn: '1h'
            });

        res.status(200).json({
            message: 'Signin successfull',
            token: token
        });
        return;

    } catch (error) {
        res.status(500).json({ msg: 'Internal server error', error: error });
    }
});

app.post("/room", async (req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        });
        return;
    }
    // @ts-ignore
    const userId = req.userId;
    const room = await prismaClient.room.create({
        data: {
            slug: parsedData.data.name,
            adminId: userId
        }
    })

    res.json({
        roomId: room.id
    })
    return;
})

app.get("/chats/room/:roomId", async (req, res) => {
    try {
        const roomId = Number(req.params.roomId);
        const messages = await prismaClient.room.findMany({
            where: {
                id: roomId
            },
            orderBy: {
                id: "desc"
            },
            take: 50
        });
        res.status(200).json({
            messages
        });
        return;
    } catch (error) {
        console.error(error);
        res.status(501).json({
            message: "An error occured",
            error
        });
        return;
    }
})

app.get("/room/:slug", async (req, res) => {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
        where: {
            slug
        }
    });

    if (!room) {
        res.status(403).json({
            message: "Room not found"
        });
        return;
    }
    res.status(200).json({
        room
    });
    return;
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
