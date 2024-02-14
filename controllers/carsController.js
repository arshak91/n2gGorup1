import Car from "../schemes/carSchema.js"
import User from "../schemes/userSchema.js"

async function addCar(req, res) {
    try {
        const car = await Car.create({ ...req.body, })
        res.json({ car })
    } catch (error) {
        res.json(error.message)
    }

}

async function getCars(req, res) {
    try {
        const cars = await Car.find().populate({
            path: "user",
            model: User,
            select: { password: false }
        })
        req.query.name = !req.query.name ? "" : req.query.name
        const filteredCars = cars.filter(car => car.name.toLowerCase().includes(req.query.name.toLowerCase()))
        res.json(filteredCars)
    } catch (error) {
        res.json({ error: error.message })
    }
}

async function getMyCars(req,res){
    try {
        const myCars = await Car.find({user: req.body.user})
        res.json(myCars)
    } catch (error) {
        res.json({error: error.message})
    }
}

export { getCars, addCar,getMyCars }