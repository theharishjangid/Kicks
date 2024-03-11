import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.js";
import { Product } from "../models/product.js";

export const registerUser = asyncHandler(async (req, res) => {
    try {
        const { firstName, lastName, gender, email, password } = req.body;
        if (
            [firstName, lastName, email, gender, password].some(
                (field) => field?.trim() === ""
            )
        ) {
            throw new ApiError(400, "All fields are required");
        }

        const existedUser = await User.findOne({ email });
        if (existedUser) {
            throw new ApiError(409, "User with this email already exists");
        }

        const newUser = await User.create({
            firstName,
            lastName,
            gender,
            email,
            password,
        });
        const jwtToken = await newUser.generateToken();
        newUser.token = jwtToken;
        await newUser.save();

        res.status(201).json(
            new ApiResponse(
                201,
                {
                    id: newUser._id,
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    token: jwtToken,
                },
                "User created successfully"
            )
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(400, `Failed to create the user: ${error.message}`);
    }
});

export const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        if ([email, password].some((field) => field?.trim() === "")) {
            throw new ApiError(400, "All fields are required");
        }

        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const isPasswordValid = await user.isPasswordValid(password);
        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid password");
        }

        const jwtToken = await user.generateToken();
        user.token = jwtToken;
        await user.save();

        res.status(200).json(
            new ApiResponse(
                200,
                {
                    id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: jwtToken,
                },
                "User logged in successfully"
            )
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(401, `Failed to login the user: ${error.message}`);
    }
});

export const getUser = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(
            new ApiResponse(
                200,
                {
                    id: req.user._id,
                    email: req.user.email,
                    firstName: req.user.firstName,
                    lastName: req.user.lastName,
                    gender: req.user.gender,
                    address: req.user.address,
                    phone: req.user.phone,
                },
                "User fetched successfully"
            )
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            401,
            `Failed to get the user details: ${error.message}`
        );
    }
});

export const getCart = asyncHandler(async (req, res) => {
    try {
        if (req.user.cart.length === 0) {
            return res
                .status(200)
                .json(
                    new ApiResponse(200, [], "User cart fetched successfully")
                );
        }
        const products = await Product.find({
            _id: { $in: req.user.cart.map((item) => item.productId) },
        });
        const productsData = {};
        products.forEach((product) => {
            productsData[product._id] = product;
        });
        const respData = [];
        req.user.cart.forEach((item) => {
            const product = productsData[item.productId];
            respData.push({
                id: product._id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: item.quantity,
                color: item.color,
                size: item.size,
                wishListed: req.user.wishlist.includes(product._id),
            });
        });
        res.status(200).json(
            new ApiResponse(200, respData, "User cart fetched successfully")
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            401,
            `Failed to get the user cart: ${error.message}`
        );
    }
});

export const addToCart = asyncHandler(async (req, res) => {
    try {
        const { productId, color, size, quantity } = req.body;
        if ([productId, color, size].some((field) => !field)) {
            throw new ApiError(
                400,
                "productId, color, size fields are required"
            );
        }

        const product = await Product.findById(productId);
        if (!product) {
            throw new ApiError(404, "Invalid productId");
        }
        const index = req.user.cart.findIndex(
            (item) =>
                item.productId.toString() === product._id.toString() &&
                item.color === color &&
                item.size === size
        );

        let updatedQuantity = quantity;
        if (index === -1) {
            const cartItem = {
                productId: product._id,
                color,
                size,
                quantity: quantity || 1,
            };
            req.user.cart.push(cartItem);
        } else {
            updatedQuantity += req.user.cart[index].quantity;
            req.user.cart[index].quantity = updatedQuantity;
        }
        await req.user.save();

        res.status(200).json(
            new ApiResponse(
                200,
                {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    quantity: updatedQuantity,
                    color,
                    size,
                },
                "Product added to cart successfully"
            )
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            400,
            `Failed to add product to cart: ${error.message}`
        );
    }
});

export const removeFromCart = asyncHandler(async (req, res) => {
    try {
        const { productId, color, size } = req.body;
        if ([productId, color, size].some((field) => !field)) {
            throw new ApiError(
                400,
                "productId, color, size fields are required"
            );
        }

        const product = await Product.findById(productId);
        if (!product) {
            throw new ApiError(404, "Invalid productId");
        }

        const index = req.user.cart.findIndex(
            (item) =>
                item.productId.toString() === product._id.toString() &&
                item.color === color &&
                item.size === size
        );
        if (index === -1) {
            throw new ApiError(404, "Item not found in the cart");
        }

        req.user.cart.splice(index, 1);
        await req.user.save();

        res.status(200).json(
            new ApiResponse(200, null, "Product removed from cart successfully")
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            400,
            `Failed to remove product from cart: ${error.message}`
        );
    }
});

export const getWishlist = asyncHandler(async (req, res) => {
    try {
        if (req.user.wishlist.length === 0) {
            return res
                .status(200)
                .json(
                    new ApiResponse(
                        200,
                        [],
                        "User wishlist fetched successfully"
                    )
                );
        }
        const wishlistData = await Product.find({
            _id: { $in: req.user.wishlist },
        });

        const respData = [];

        wishlistData.forEach((item) => {
            respData.push({
                id: item._id,
                name: item.name,
                price: item.price,
                image: item.images[0],
            });
        });
        res.status(200).json(
            new ApiResponse(200, respData, "User wishlist fetched successfully")
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            401,
            `Failed to get the user wishlist: ${error.message}`
        );
    }
});

export const addToWishlist = asyncHandler(async (req, res) => {
    try {
        const { productId } = req.body;
        if (!productId) {
            throw new ApiError(400, "productId field is required");
        }

        const product = await Product.findById(productId);
        if (!product) {
            throw new ApiError(404, "Invalid productId");
        }

        if (req.user.wishlist.includes(product._id)) {
            throw new ApiError(
                400,
                "Product is already present in the wishlist"
            );
        }

        req.user.wishlist.push(product._id);
        await req.user.save();

        res.status(200).json(
            new ApiResponse(
                200,
                {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                },
                "Product added to wishlist successfully"
            )
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            400,
            `Failed to add product to wishlist: ${error.message}`
        );
    }
});

export const removeFromWishlist = asyncHandler(async (req, res) => {
    try {
        const { productId } = req.body;
        if (!productId) {
            throw new ApiError(400, "productId field is required");
        }

        const product = await Product.findById(productId);
        if (!product) {
            throw new ApiError(404, "Invalid productId");
        }

        if (!req.user.wishlist.includes(product._id)) {
            throw new ApiError(400, "Product is not present in the wishlist");
        }

        req.user.wishlist = req.user.wishlist.filter(
            (id) => id.toString() !== product._id.toString()
        );
        await req.user.save();

        res.status(200).json(
            new ApiResponse(
                200,
                {
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                },
                "Product removed from wishlist successfully"
            )
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            400,
            `Failed to remove product from wishlist: ${error.message}`
        );
    }
});
