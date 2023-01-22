import express, { type Application } from "express";
//import router from "./routes/index.routes"
import { user_router, song_router } from "./routes/index.routes";

const app: Application = express();




app.use(express.json());
app.use("/api/v1", user_router)
app.use("/api/v1", song_router)


export default app;