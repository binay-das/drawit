import express from 'express';
import { prismaClient } from '@repo/db/db';
import jwt from 'jsonwebtoken';
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        server: 'Server is working fine',
        message: 'Hello World!'
    });
});

app.post('/api/v1/signup', async (req, res) => {
    const { username, password, name } = req.body;
    try {
        const user = await prismaClient.user.findFirst({
            where: {
                username
            }
        });
        if (!user || user.password !== password) {
            res.status(401).json({ msg: 'Invalid username or password' });
            return;
        }
        prismaClient.user.create({
            data: {
                username,
                password,
                name
            }
        }).then(() => {
            res.status(201).json({ msg: 'User created successfully' });
        }).catch((error) => {
            res.status(500).json({ msg: 'Internal server error', error: error.message });
        });

    } catch (error) {
        res.status(500).json({ msg: 'Internal server error', error: error });
    }

});
app.post('/api/v1/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prismaClient.user.findFirst({
            where: {
                username
            }
        });
        if (!user || user.password !== password) {
            res.status(401).json({ msg: 'Invalid username or password' });
            return;
        }
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.status(200).json({
            message: 'Signin successfull',
            token: token
        });
        return;

    } catch (error) {
        res.status(500).json({ msg: 'Internal server error', error: error });
    }

});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
