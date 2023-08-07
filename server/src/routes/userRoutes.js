import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = new Router();

router.get("/create", UserController.create);

export default router;