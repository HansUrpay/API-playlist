import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

// agregando propiedad user al modulo express
// declare module "express" {
//   export interface Request {
//     user: any;
//   }
// }

const JWT_SECRET = process.env.SECRET_KEY;

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, JWT_SECRET as string);
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(401).json({ message: "Unauthorized" });
    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token format wrong" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET as string, (err: any, decoded: any) => {
      if (err) return res.status(400).send("Invalid token.");
      req.body = { decoded };
      next();
    });
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};
