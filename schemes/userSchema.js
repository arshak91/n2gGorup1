import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = Schema({
    username: { type: String, required: true, minLength: 8 },
    password: { type: String, required: true, minLength: 8 },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    createdTime: { type: String, required: true },
});

export default mongoose.model("User", userSchema)