import { Router } from "express";
import authRoutes from "./auth.routes.js";
import signUpRoutes from "./signUp.routes.js";


const router = Router();

router.use('', authRoutes);
router.use('/api', signUpRoutes)

export default router;
