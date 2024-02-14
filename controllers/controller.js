import User from "../schemes/userSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const jwtKey = "admin"

async function getUsers(req, res) {
    try {
        if (!req.query.username) {
            req.query.username = ""
        }
        const users = await User.find().select({ password: false })
        const filteredUsers = users.filter(user => user.username.includes(req.query.username.toLowerCase()))
        res.json(filteredUsers)
    }
    catch (error) {
        res.json({ error: error.message })
    }
}


async function register(req, res) {
    try {
        const userWithSameUsername = await User.find({ username: req.body.username })
        if (!userWithSameUsername.length) {
            const user = await User.create({
                ...req.body,
                createdTime: new Date(),
            })
            user.password = bcrypt.hashSync(String(req.body.password), bcrypt.genSaltSync(10))
            await user.save()
            res.json({ message: `Welcome ${user.fullName}!` })
        }
        else {
            res.json({ message: `Username '${req.body.username}' taken, try another username!` })
        }
    }
    catch (error) {
        res.json({ error: error.message })
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user) {
            if (bcrypt.compareSync(String(req.body.password), user.password)) {
                    const token = jwt.sign({user}, jwtKey, {expiresIn: "1h"})
                res.json({
                    message: "Login successfull!",
                    token
                })
            }
            else {
                res.json({
                    message: "Password is wrong try again!"
                })
            }
        }
        else {
            res.json({
                message: "Username does not exist!"
            })
        }
    }
    catch (error) {
        res.json({ error: error.message })
    }
}

export { getUsers, register, login }