import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(userId: number) {
  const payload = { userId };
  return jwt.sign(payload, JWT_SECRET as string);
}

function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET as string);
}

module.exports = { generateToken, verifyToken };