import { Router } from "express";
import { songs } from "../../controllers/index.controller";


const song_router = Router();

song_router.get("/songs", songs.findAll);


export default song_router;
