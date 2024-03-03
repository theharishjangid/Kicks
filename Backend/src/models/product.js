import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
            index: true,
        },
        salePrice: {
            type: Number,
        },
        stock: {
            type: Number,
            required: true,
            default: 0,
        },
        images: [
            {
                type: String,
                required: true,
                trim: true,
            },
        ],
        brand: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        colors: [
            {
                type: String,
                required: true,
                index: true,
                enum: [
                    "blue",
                    "yellow",
                    "red",
                    "green",
                    "off_white",
                    "orange",
                    "off_gray",
                    "cement",
                    "brown",
                    "tan",
                ],
            },
        ],
        sizes: [
            {
                type: Number,
                required: true,
                index: true,
                enum: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
            },
        ],
        category: {
            type: String,
            required: true,
            index: true,
            enum: [
                "sneaker",
                "basketball",
                "running",
                "outdoor",
                "golf",
                "hiking",
            ],
        },
        gender: {
            type: String,
            required: true,
            index: true,
            enum: ["men", "women", "unisex"],
        },
        tag: {
            type: String,
            required: false,
            index: true,
            enum: ["new", "sale", "exclusive"],
        },
    },
    {
        timestamps: true,
    }
);

export const Product = model("Product", productSchema);
