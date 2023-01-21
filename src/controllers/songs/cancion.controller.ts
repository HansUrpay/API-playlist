import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const songs = await prisma.song.findMany();

    res.status(200).json({
      ok: true,
      data: songs,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};


export const findOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const song = await prisma.song.findFirst({ where: { id } });

    res.status(200).json({
      ok: true,
      data: song,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};


export const store = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, artist, album, year, genre, duration, publico } = req.body;
  
      await prisma.song.create({
        data: {
            name,
            artist,
            album,
            year,
            genre,
            duration,
            publico,
        },
      });
  
      res.status(201).json({ ok: true, message: "Song creado correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };



  export const modify = async (req: Request, res: Response): Promise<void> => {
    try {
    const id: number = parseInt(req.params.id);
    const data = req.body;

    await prisma.song.update({
        where: { id },
        data: data,
    });

    res.status(201).json({ ok: true, message: "Song actualizado correctamente" });
    } catch (error) {
    res.status(500).json({ ok: false, message: error });
    }
};

export const deletee = async (req: Request, res: Response): Promise<void> => {
    try {
    const id: number = parseInt(req.params.id);

    const song = await prisma.song.delete({
        where: {
          id,
        },
      });

    res.status(201).json({ ok: true, message: "Song Borrado correctamente" });
    } catch (error) {
    res.status(500).json({ ok: false, message: error });
    }
};