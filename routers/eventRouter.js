import express from "express"
import { getEvents, createEvent } from "../controllers/eventController.js"
import validateToken from "../middleware/validateToken.js"
const eventRouter = express.Router()

eventRouter.get("/events", getEvents)
eventRouter.post("/createEvent", validateToken,createEvent)

export default eventRouter