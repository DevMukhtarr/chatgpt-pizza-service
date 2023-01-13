import express from 'express';
import { createOrder, getPendingOrders, updateOrderStatus } from '../controllers/maincontroller.js';
import { getPizzas } from '../controllers/maincontroller.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

// create a new order
router.post('/order', verifyToken, createOrder);

// get all pending orders
router.get('/orders/pending', verifyToken, getPendingOrders);

// update the status of an order
router.patch('/order/:id', verifyToken, updateOrderStatus);

// get all pizzas
router.get('/pizzas', getPizzas);

export default router;