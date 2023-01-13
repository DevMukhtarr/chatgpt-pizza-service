import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    password: {
        type: String
    }
});

export default mongoose.model("User", UserSchema)