import { Router } from "express";
import Authenticate from "../middlewares/auth.js";
import { createProduct } from "../controllers/product.js";
import upload from "../middlewares/multer.js";

const productRouter = Router();

productRouter.route("/").post(
    Authenticate,
    upload.fields([
        {
            name: "image1",
            maxCount: 1,
        },
        {
            name: "image2",
            maxCount: 1,
        },
        {
            name: "image3",
            maxCount: 1,
        },
        {
            name: "image4",
            maxCount: 1,
        },
    ]),
    createProduct
);

export default productRouter;
