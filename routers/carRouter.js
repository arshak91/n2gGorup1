import express from "express"
import { getCars, addCar, getMyCars } from "../controllers/carsController.js"
import validateToken from "../middleware/validateToken.js"
const carRouter = express.Router()

carRouter.get("/cars", getCars)
carRouter.get("/myCars", validateToken, getMyCars)
carRouter.post("/addCar", validateToken, addCar)

export default carRouter