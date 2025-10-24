import express from 'express';
import { createPlayer, updatePlayer } from '../controllers/playersController.js';

const router = express.Router();    

router.post("/createPlayer", createPlayer)
router.put("/updatePlayer/:id", updatePlayer)
//router.delete("/delete", deletePlayer)
//router.get("/player", getPlayer)

export default router;