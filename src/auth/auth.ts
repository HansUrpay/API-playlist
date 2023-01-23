import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

const JWT_SECRET = process.env.SECRET_KEY;

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, JWT_SECRET as string, { expiresIn: "1h" });
};

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(401).json({ message: "Unauthorized" });
    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token format wrong" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET as string, (err: any, decoded: any) => {
      if (err) return res.status(401).send("Invalid token.");
        (req as any).decoded = decoded;
      next();
    });
  } catch (err) {
    res.status(401).send(err);
  }
};
