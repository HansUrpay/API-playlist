import { Router } from "express";
import user_router from "./users/user.routes";

const router = Router();

router.use("/api/v1", user_router);

export default router;