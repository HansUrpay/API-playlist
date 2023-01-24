import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findplaylist = async (_req: Request, res: Response): Promise<void> => {
    try {
        const playlists = await prisma.playlist.findMany({
            include: {
                song: {
                    select: {
                        datos: {
                            select: {
                                id: true,
                                name: true,
                                artist: true,
                                album: true,
                                year: true,
                                genre: true,
                                duration: true,
                            }
                        }
                    }
                }
            },
        });
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

export const seeSongs = async (_req: Request, res: Response): Promise<void> => {
    try {
        const songOnPlaylist = await prisma.songsOnPlaylist.findMany();

        res.status(200).json({
            ok: true,
            data: songOnPlaylist,
        });
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};


export const addSongs = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const songOnPlaylist = await prisma.songsOnPlaylist.create({
            data: {
                ...body,
            },
        });
        res.status(201).json({
            ok: true,
            message: "Canción agregada correctamente a la tabla SongsOnPlaylist",
            data: songOnPlaylist,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: error,
        });
    }
};
