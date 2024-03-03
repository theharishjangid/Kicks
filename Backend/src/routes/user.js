import { Router } from "express";
import {
    registerUser,
    loginUser,
    getUser,
    getCart,
    addToCart,
    removeFromCart,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
} from "../controllers/user.js";
import Authenticate from "../middlewares/auth.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);

// secure routes

userRouter.route("/").get(Authenticate, getUser);
// cart routes
userRouter.route("/cart").get(Authenticate, getCart);
userRouter.route("/cart").post(Authenticate, addToCart);
userRouter.route("/cart").delete(Authenticate, removeFromCart);
// wishlist routes
userRouter.route("/wishlist").get(Authenticate, getWishlist);
userRouter.route("/wishlist").post(Authenticate, addToWishlist);
userRouter.route("/wishlist").delete(Authenticate, removeFromWishlist);

export default userRouter;
