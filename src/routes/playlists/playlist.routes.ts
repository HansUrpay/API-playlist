import { Router } from "express";
import { playlists } from "../../controllers/index.controller";
import { verifyToken } from "../../auth/auth";

const playlist_router = Router();

playlist_router.get("/playlist",playlists.findplaylist);
playlist_router.post("/playlist", verifyToken,playlists.createPlaylist);
playlist_router.delete("/playlist/:id",playlists.deletePlaylist);
playlist_router.get("/playlistadd",playlists.seeSongs);
playlist_router.post("/playlistadd", verifyToken,playlists.addSongs);
playlist_router.delete("/playlistadd/:id_playlist/song/:id_song", playlists.deleteSongFromPlaylist);



export default playlist_router;