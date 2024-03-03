import { Product } from "../models/product.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import { PRODUCT_FOLDER } from "../constants.js";

export const createProduct = asyncHandler(async (req, res) => {
    try {
        console.log(req.body);
        const {
            name,
            description,
            price,
            stock,
            brand,
            category,
            gender,
            tag,
            colors,
            sizes,
        } = req.body;
        if (
            [name, description, price, stock, brand, category, gender].some(
                (field) => field?.trim() === ""
            ) &&
            colors.length === 0 &&
            sizes.length === 0
        ) {
            throw new ApiError(400, "All fields are required");
        }

        const image1LocalPath = req.files?.image1[0]?.path;
        const image2LocalPath = req.files?.image2[0]?.path;
        const image3LocalPath = req.files?.image3[0]?.path;
        const image4LocalPath = req.files?.image4[0]?.path;

        const image1 = await uploadOnCloudinary(
            image1LocalPath,
            PRODUCT_FOLDER
        );
        const image2 = await uploadOnCloudinary(
            image2LocalPath,
            PRODUCT_FOLDER
        );
        const image3 = await uploadOnCloudinary(
            image3LocalPath,
            PRODUCT_FOLDER
        );
        const image4 = await uploadOnCloudinary(
            image4LocalPath,
            PRODUCT_FOLDER
        );

        const product = await Product.create({
            name,
            description,
            price,
            stock,
            brand,
            colors,
            sizes,
            category,
            gender,
            tag: tag || undefined,
            images: [image1.url, image2.url, image3.url, image4.url],
        });

        res.status(201).json(
            new ApiResponse(
                201,
                {
                    id: product._id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                    brand: product.brand,
                    colors: product.colors,
                    sizes: product.sizes,
                    category: product.category,
                    gender: product.gender,
                    tag: product.tag,
                    images: product.images,
                },
                "Product created successfully"
            )
        );
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            400,
            `Failed to create the product: ${error.message}`
        );
    }
});
