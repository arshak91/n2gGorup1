import mongoose from "mongoose";

const Schema = mongoose.Schema;
const eventSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, required: true },
}, {
    timestamps: true
});

export default mongoose.model("Event", eventSchema)