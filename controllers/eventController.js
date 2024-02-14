import Event from "../schemes/eventSchema.js"
import User from "../schemes/userSchema.js"

async function createEvent(req, res) {
    try {
        const event = await Event.create({
            ...req.body,
        })
        res.json(event)
    } catch (error) {
        res.json(error.message)
    }

}

async function getEvents(req, res) {
    try {
        const events = await Event.find().populate({
            path: "user",
            model: User,
            select: {
                password: false
            }
        })
        res.json({ events })
    } catch (error) {
        res.json({ error: error.message })
    }
}

export { getEvents, createEvent }