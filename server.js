import express from "express";
import router from "./routers/router.js"
import eventRouter from "./routers/eventRouter.js"
import carRouter from "./routers/carRouter.js";
import "./connectDB.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use("/", router)
app.use("/", eventRouter)
app.use("/", carRouter)
app.listen(80)