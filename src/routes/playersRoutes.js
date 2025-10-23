import express from 'express';
import { createPlayer } from '../controllers/playersController.js';

const router = express.Router();    

router.post("/createPlayer", createPlayer)
//router.put("/update", updatePlayer)
//router.delete("/delete", deletePlayer)
//router.get("/player", getPlayer)

export default router;