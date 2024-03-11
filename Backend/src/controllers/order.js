import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { Order } from "../models/order.js";

export const createOrder = asyncHandler(async (req, res) => {
    try {
        const { items, amount, shippingAddress, phone, status, paymentType, deliveryType } =
            req.body;
        if (items.length === 0) {
            throw new ApiError(400, "No order items");
        }
        const order = await Order.create({
            items,
            customerId: req.user._id,
            amount,
            shippingAddress,
            phone,
            status: status || "ordered",
            paymentType: paymentType || "cod",
            deliveryType: deliveryType || "standard",
        });
        res.status(201).json(
            new ApiResponse(201, order, "Order placed successfully")
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(400, `Failed to place the order: ${error.message}`);
    }
});

export const getOrders = asyncHandler(async (req, res) => {
    try {
        const orders = await Order.find({ customerId: req.user._id }).sort({
            createdAt: -1,
        });
        res.status(200).json(
            new ApiResponse(200, orders, "Fetched orders successfully")
        );
    } catch (error) {
        throw new ApiError(400, `Failed to fetch orders: ${error.message}`);
    }
});
