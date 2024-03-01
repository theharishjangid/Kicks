import { User } from "../models/user";
import ApiResponse from "../utils/apiResponse";
import ApiError from "../utils/apiError";

export const registerUser = async (req, res) => {
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
        throw new ApiError(
            500,
            "Something went wrong while registering the user"
        );
    }
};
