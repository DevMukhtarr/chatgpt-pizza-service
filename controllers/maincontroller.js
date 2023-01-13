import mongoose from 'mongoose';
import Order from '../models/Order.js';
const PIZZAS = ['Neapolitan Pizza', 'Chicago Pizza', 'Sicilian Pizza', 'Greek Pizza', 'Detroit Pizza'];

export const getPizzas = (req, res) => {
    res.status(200).json({pizzas: PIZZAS});
};


export const createOrder = async (req, res) => {
    try {
        // create a new order
        const order = new Order({
            customer: mongoose.Types.ObjectId(req.user.id),
            pizza: req.body.pizza,
            size: req.body.size,
            status: "pending",
            createdAt: new Date()
        });

        // save the order to the database
        await order.save();

        // send a response to the client
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPendingOrders = async (req, res) => {
    try {
        // check if the user's role is "delivery personnel"
        if (req.user.role !== 'delivery personnel') {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // retrieve all pending orders from the database
        const orders = await Order.find({ status: 'pending' });

        // send the orders as a response
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateOrderStatus = async (req, res) => {
    try {
        // check if the user's role is "delivery personnel"
        if (req.user.role !== 'delivery personnel') {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // find the order by id
        const order = await Order.findById(req.params.id);

        // update the status of the order
        order.status = req.body.status;
        await order.save();

        // send a response to the client
        res.status(200).json({ message: 'Order status updated successfully', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};