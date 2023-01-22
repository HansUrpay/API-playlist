import { Router } from "express";
import { users } from "../../controllers/index.controller";
import { verifyToken } from "../../auth/auth";


const user_router = Router();

<<<<<<< HEAD
user_router.get("/users", verifyToken, users.get_users);
user_router.post("/users", users.create_users);
user_router.post("/login", users.login_users);
=======
user_router.get("/users", users.get_users);
user_router.post("/users", users.create_users);
>>>>>>> main

export default user_router;
