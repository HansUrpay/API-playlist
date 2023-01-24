import { Router } from "express";
import { playlists } from "../../controllers/index.controller";
import { verifyToken } from "../../auth/auth";

const playlist_router = Router();

playlist_router.post("/playlist", verifyToken, playlists.createPlaylist);
playlist_router.get("/playlist", verifyToken, playlists.findplaylist);
playlist_router.delete("/playlist/:id", verifyToken, playlists.deletePlaylist);
playlist_router.post("/playlistadd", verifyToken, playlists.addSongs);
playlist_router.get("/playlistadd", verifyToken, playlists.seeSongs);
playlist_router.delete("/playlistadd/:id_playlist/song/:id_song", verifyToken, playlists.deleteSongFromPlaylist);



export default playlist_router;