import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const get_users = async (req: Request, res: Response) => {
console.log("Controller")    
    try {
      console.log("Try");
    debugger;
    const users = await prisma.user.findMany();
    res.status(200).json({
      ok: true,
      data: users,
    });
    } catch (error) {
        console.log("Catch");
    res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

export const create_users = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const user = await prisma.user.create({
      data: {
        ...body,
      },
    });
    res.status(200).json({
      ok: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

// const users = {
//     get_users,
//     create_users
// }

// export default users;