import {z} from 'zod';

export const SignUpSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6),
    name: z.string().min(3).max(30).optional(),
    photo: z.string().min(3).max(30).optional()
});

export const SignInSchema = z.object({
    username: z.string().min(3).max(30), 
    password: z.string().min(6),
});


export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(30), 
});