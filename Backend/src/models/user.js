import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
            enum: ["male", "female", "other"],
        },
        address: {
            type: String,
        },
        phone: {
            type: String,
        },
        token: {
            type: String,
        },
        cart: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
        wishlist: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.isPasswordValid = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
        },
        process.env.JWT_TOKEN_SECRET,
        { expiresIn: process.env.JWT_TOKEN_EXPIRY }
    );
};

export const User = model("User", userSchema);
