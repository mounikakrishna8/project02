import { Router } from "express";
import authRoutes from "./auth.routes.js";
import signUpRoutes from "./signUp.routes.js";
import shopRoutes from "./shop.routes.js";


const router = Router();

router.use('/api', signUpRoutes);
router.use('/api', authRoutes);
router.use('/api', authRoutes);
router.use('/api', shopRoutes);

export default router;
