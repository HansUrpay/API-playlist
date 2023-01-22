import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt"

const prisma = new PrismaClient();

export const get_users = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    res.status(200).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

/* export const create_users = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
      const { body } = _req;
      if (!body.email || !body.password) {
        res.status(400).send("Username and password are required.");
      }
    const hash = await bcrypt.hash(body.password, 10);
    body.password = hash;
    const user = await prisma.user.create({
    data: {
        ...body,
      },
    });
    res.status(200).json({
      ok: "Successfully created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const login_users = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = _req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      throw new Error("Invalid username or password");
    }
    // res.json({ token });
  } catch (error) {
    res.status(401).json({
      ok: false,
      error,
    });
  }
}; */



// const users = {
//     get_users,
//     create_users
// }

// export default users;
