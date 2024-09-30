import { Router } from "express";
import { getProducts, registerProduct } from "../controllers/products";
import validateToken from "./validarToken";

const router = Router();

router.post("/api/product/register", registerProduct)
router.get("/api/product/getAllProducts",validateToken, getProducts)


export default router