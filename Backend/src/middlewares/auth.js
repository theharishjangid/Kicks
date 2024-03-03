import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import ApiError from "../utils/apiError.js";

const Authenticate = asyncHandler(async (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        if (!token) {
            throw new ApiError(401, "Unauthorized: token not found");
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        } catch (error) {
            throw new ApiError(401, "Unauthorized: token not valid");
        }

        const user = await User.findOne({ _id: decoded.id });
        if (!user) {
            throw new ApiError(401, "Unauthorized: user not found");
        }

        req.user = user;
        next();
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(401, "Failed to Authenticate the user");
    }
});

export default Authenticate;
