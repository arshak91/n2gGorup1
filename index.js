const express = require("express");
const fs = require("fs")

const app = express();

app.get('/', (req, res) => {
    const users = fs.readFileSync("./data.json", "utf8")
    res.json(JSON.parse(users))
})

app.post("/", (req, res) => {
    const users = JSON.parse(fs.readFileSync("./data.json", "utf8"))
    const newUser = {
        id: users.length + 1,
        name: req.query.name,
        surname: req.query.surname,
        age: Number(req.query.age),
    }
    users.push(newUser)
    fs.writeFileSync("./data.json", JSON.stringify(users))
    res.json("Added new user!")
})

app.listen(80)