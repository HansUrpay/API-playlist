import express, { type Application } from "express";
import router from "./routes/index.routes"
const app: Application = express();


import routes from "./routes/index.routes"

app.use(express.json());
app.use("/", router)


// prueba
app.use("/", routes)

export default app;