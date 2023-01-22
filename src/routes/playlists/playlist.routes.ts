import { Router } from "express";
import { playlists } from "../../controllers/index.controller";

const playlist_router = Router();

playlist_router.get("/playlist", playlists.findplaylist);
playlist_router.post("/playlist_create", playlists.createPlaylist);
playlist_router.put("/playlist_add",playlists.addSongsToPlaylist);

export default playlist_router;