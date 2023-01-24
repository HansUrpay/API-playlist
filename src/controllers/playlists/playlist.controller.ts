import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findplaylist = async (_req: Request, res: Response): Promise<void> => {
    try {
        const playlists = await prisma.playlist.findMany({
            include: {
                songs: {
                    select: {
                        song: {
                            select: {
                                id: true,
                                name: true,
                                artist: true,
                                album: true,
                                year: true,
                                genre: true,
                                duration: true,
                                publico: true,
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
            message: 'Playlist created successfully',
            data: playlists,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: error,
        });
    }
};

export const deletePlaylist = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { id } = _req.params;
        await prisma.songsOnPlaylist.deleteMany({ where: { id_playlist: Number(id) } });
        await prisma.playlist.delete({ where: { id: Number(id) } });

        res.status(200).json({
            ok: true,
            message: `Playlist with id ${id} has been deleted.`,
        });

    } catch (error) {
        res.status(500).json({ ok: false, message: error });
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
            message: "Song added succesfully to the playlist",
            data: songOnPlaylist,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: error,
        });
    }
};

export const deleteSongFromPlaylist = async (_req: Request, res: Response): Promise<void> => {
    try {
        const { id_song, id_playlist } = _req.params;
        const deletedSongOnPlaylist = await prisma.songsOnPlaylist.deleteMany({ where: { id_song: Number(id_song), id_playlist: Number(id_playlist) } });

        if (deletedSongOnPlaylist) {
            res.status(200).json({
                ok: true,
                message: `Song with id ${id_song} has been deleted from playlist ${id_playlist}.`,
            });
        } else {
            res.status(404).json({
                ok: false,
                message: `Song with id ${id_song} on playlist ${id_playlist} not found.`,
            });
        }
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};
