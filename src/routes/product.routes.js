import { Router } from "express";
import { getProducts, createProduct, getProductById, deleteProductById, getTotalProducts, updateProductById } from "../controllers/product.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createProduct);

router.get("/products/count", getTotalProducts);

router.put("/products/:id", updateProductById);

router.delete("/products/:id", deleteProductById);

router.get("/products/:id", getProductById);


export default router;