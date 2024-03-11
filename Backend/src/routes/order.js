import { Router } from "express";
import Authenticate from "../middlewares/auth.js";
import { createOrder, getOrders } from "../controllers/order.js";

const orderRouter = Router();

orderRouter.route("/").post(Authenticate, createOrder);
orderRouter.route("/").get(Authenticate, getOrders);

export default orderRouter;
