import express from "express";
const app = express();

import { InsufficientBalanceError } from "./shared/errors";
import { errorHandler } from "./shared/middleware/errorHandler";
import { logger } from "./shared/logger";

app.use(express.json());

app.get("/health", (req, res) => {
    res.json(
        { status: "ok" }
    );

});

app.get("/test-error", (req, res, next) => {
    logger.info(
        { route: "/test-error" },
        "Simulating insufficient balance error"
    );

    next(new InsufficientBalanceError("not enough funds"));
});

app.get("/test-crash", () => {
    throw new Error("boom!!!!!");
});

logger.info({ Name: "Suyash" }, "Worked");


app.use(errorHandler);
export default app;