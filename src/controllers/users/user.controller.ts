import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { generateToken } from "../../auth/auth";

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

export const create_users = async (req: Request, res: Response) => {
  try {
    interface User {
      id: number;
      name: string;
      email: string;
      password: string;
      last_session: Date;
      update_at: Date;
      date_born: Date;
    }
    // verificacion de email y password
    const { body } = req;
    if (!body.email || !body.password) {
      res.status(400).send("Username and password are required.");
    }
    // hash de password
    const saltRounds: number = 5;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(body.password, salt);
    body.password = hash;
    // creacion de usuario
    const user: User | null = await prisma.user.create({
      data: body,
    });
    res.status(200).json({
      ok: "Successfully created",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};

export const login_users = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    interface User {
      id: number;
      name: string;
      email: string;
      password: string;
      last_session: Date;
      update_at: Date;
      date_born: Date;
    }
    // busqueda de usuario por email
    const { body } = req;
    const user: User | null = await prisma.user.findFirst({
      where: { email: body.email },
    });
    // validacion de usuario por password
    if (user) {
      const isValid = await bcrypt.compare(body.password, user.password);
      if (isValid) {
        // generacion de token del usario
        const token = generateToken(body.id);
        res.status(200).json({
          ok: true,
          data: "Welcome!",
          token,
        });
      } else {
        res.status(500).json({
          ok: false,
          data: "Incorrect password",
        });
      }
    } else {
      res.status(500).json({
        ok: false,
        data: "Incorrect email",
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
    });
  }
};
