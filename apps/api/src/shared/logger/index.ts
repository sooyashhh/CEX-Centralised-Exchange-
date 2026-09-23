import pino from "pino";
import { config } from "../config";
import { logger } from "./shared/logger"

export const logger = pino({
    level: config.LOG_LEVEL,
    transport:
        config.NODE_ENV === "development"
            ? { target: "pino-pretty" }
            : undefined,
});