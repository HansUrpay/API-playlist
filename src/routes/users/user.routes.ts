import { Router } from "express";
import { users } from "../../controllers/index.controller";
import { verifyToken } from "../../auth/auth";


const user_router = Router();

user_router.get("/users", verifyToken, users.get_users);
user_router.post("/users", users.create_users);
user_router.post("/login", users.login_users);

export default user_router;
