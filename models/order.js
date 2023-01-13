import mongoose from "mongoose"
const Schema = mongoose.Schema;

const PizzaOrderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pizza: {
        type: String,
        enum: ['Neapolitan Pizza', 'Chicago Pizza', 'Sicilian Pizza', 'Greek Pizza', 'Detroit Pizza'],
        required: true
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("PizzaOrder", PizzaOrderSchema)