import express from "express";
import cors from "cors";

const app = express();

// middlewares
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// route imports
import userRouter from "./routes/user.js";

// routes
app.use("/api/v1/user", userRouter);

export default app;
