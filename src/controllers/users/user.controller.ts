import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';

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
    const saltRounds: number = 5;
    const myPlaintextPassword: string = body.password;

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(myPlaintextPassword, salt);
    body.password = hash;


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


export const login = async (req: Request, res: Response) => {


  try {

    interface User {
      id: number,
      name: string,
      email: string,
      password: string,
      last_session: Date,
      update_at: Date,
      date_born: Date
    }


    const { body } = req;
    const user: User | null = await prisma.user.findFirst({ where: { email: body.email } });

    if (user) {
      const isValid = await bcrypt.compare(body.password, user.password);
      if (isValid) {

        res.status(200).json({
          ok: true,
          data: "BIENVENIDO!",
        });

      } else {
        res.status(500).json({
          ok: false,
          data: "Revisa tu contraseña",
        });
      }

    } else {
      res.status(500).json({
        ok: false,
        data: "Revisa tu correo",
      });
    }

    // const isValid = await bcrypt.compare(body.password, user.password);

    //bcrypt.compare(body.password, user.password).then(function(result) {
    // result == true
    //});


  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

