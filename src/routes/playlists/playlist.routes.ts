import { Router } from "express";
import { playlists } from "../../controllers/index.controller";

const playlist_router = Router();

playlist_router.get("/playlist", playlists.findplaylist);
playlist_router.post("/playlist", playlists.createPlaylist);
playlist_router.post("/playlist2",playlists.addSongsToPlaylist);

export default playlist_router;