import express from "express"
import { register, getUsers, login } from "../controllers/controller.js"
const router = express.Router()

router.get("/users", getUsers)
router.post("/register", register)
router.post("/login", login)

export default router