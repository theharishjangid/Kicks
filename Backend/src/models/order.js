import { Schema, model } from "mongoose";

const orderSchema = new Schema(
    {
        customerId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            index: true,
        },
        items: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                },
                color: {
                    type: String,
                    required: true,
                },
                size: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        amount: {
            type: Number,
            required: true,
            default: 0,
        },
        shippingAddress: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            index: true,
            enum: ["ordered", "packed", "shipped", "delivered", "cancelled"],
            default: "ordered",
        },
        paymentType: {
            type: String,
            required: true,
            enum: ["cod", "card", "upi"],
            default: "cod",
        },
        deliveryType: {
            type: String,
            required: true,
            enum: ["standard", "store"],
            default: "standard",
        },
    },
    {
        timestamps: true,
    }
);

export const Order = model("Order", orderSchema);
