import { Router } from "express";
import { users } from "../../controllers/index.controller";

const user_router = Router();

user_router.get("/users", users.get_users);
user_router.post("/users_add", users.create_users);

export default user_router;
