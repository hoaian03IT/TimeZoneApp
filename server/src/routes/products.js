import express from "express";
import productController from "../app/controllers/productController.js";

const router = express.Router();

router.get("/all", productController.getAllProduct);
router.post("/create", productController.createProduct);
router.post("/update", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);

export default router;
