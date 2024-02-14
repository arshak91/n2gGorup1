import mongoose from "mongoose"

const Car = new mongoose.Schema({
    name: { type: String, required: true, },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, required: true },
}, {
    timestamps: true
})
const CarsModel = mongoose.model('Car', Car);

export default CarsModel;
