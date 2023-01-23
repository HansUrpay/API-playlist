import { Router } from "express";
import { playlists } from "../../controllers/index.controller";
//import { verifyToken } from "../../auth/auth";

const playlist_router = Router();

playlist_router.get("/playlist", playlists.findplaylist);
playlist_router.post("/playlist", playlists.createPlaylist);
playlist_router.get("/playlistadd",playlists.seeSongs);
playlist_router.post("/playlistadd", playlists.addSongs);


export default playlist_router;