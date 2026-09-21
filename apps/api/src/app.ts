import express from "express";
const app = express();

import { InsufficientBalanceError } from "./shared/errors";
import { errorHandler } from "./shared/middleware/errorHandler";

app.use(express.json());

app.get("/health", (req, res) => {
    res.json(
        { status: "ok" }
    );

});

app.get("/test-error", (req, res, next) => {
    next(new InsufficientBalanceError("not enough funds"))
})

app.use(errorHandler);
export default app;