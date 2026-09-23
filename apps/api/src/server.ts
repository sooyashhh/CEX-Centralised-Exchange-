import app from "./app";
import { config } from "./shared/config";
import { logger } from "./shared/logger";

app.listen(config.PORT, () => {
    logger.info("Server is running");
})

