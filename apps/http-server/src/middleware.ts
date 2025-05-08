import { JWT_SECRET } from "@repo/config-package/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authorize = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"] ?? "";
    const decoded = jwt.verify(token, JWT_SECRET as string);

    if (!decoded) {
        // @ts-ignore
        req.userId = decoded.userId;
        next()
    }

    else {
        res.status(403).json({
            message: "Unauthorized"
        });
        return;
    }
}