import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const findplaylist = async (_req: Request, res: Response): Promise<void> => {
    try {
        const playlists = await prisma.playlist.findMany();

        res.status(200).json({
            ok: true,
            data: playlists,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};

export const createPlaylist = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const playlists = await prisma.playlist.create({
            data: {
                ...body,
            },
        });
        res.status(201).json({
            ok: true,
            data: playlists,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: error,
        });
    }
};

