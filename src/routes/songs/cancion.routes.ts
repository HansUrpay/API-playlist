import { Router } from "express";
import { songs } from "../../controllers/index.controller";


const song_router = Router();

song_router.get("/songs", songs.findAll);
song_router.put("/songs/:id", songs.modify);
song_router.post("/songs", songs.store);
song_router.delete("/songs/:id", songs.deletee);

export default song_router;
