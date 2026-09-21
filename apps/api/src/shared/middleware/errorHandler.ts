import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export function errorHandler(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err instanceof AppError && err.isOperational) {
        res.status(err.statusCode).json({ error: err.message })
    } else {
        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        })
    }
}