import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    JWT_SECRET: z.string().min(1),
    DATABASE_URL: z.string().url().startsWith("postgresql://"),
    PORT: z.coerce.number().default(3000),
    LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
})



let config: z.infer<typeof envSchema>;

try {
    config = envSchema.parse(process.env);
} catch (error) {
    if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
            console.log(`${issue.path.join(".")}: ${issue.message}`);
        })
        process.exit(1);
    }
}




export { config };