import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = new Router();

router.post("/create", UserController.create);
router.put("/update", UserController.update);
router.delete("/delete/:id", UserController.delete);

export default router;