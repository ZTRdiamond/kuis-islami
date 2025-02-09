import express from "express";
import morgan from "morgan";
import cors from "cors";
import { importQuiz } from "./libs/quiz.js";

// import router
import index from "./routers/index.js";
import api from "./routers/api.js";

const app = express();
await importQuiz();

// middlewares;
app.set("json spaces", 2);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

// router 
app.use("/", index)
app.use("/api", api)

export default app;