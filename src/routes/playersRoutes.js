import express from "express";
import {
  createPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers,
} from "../controllers/playersController.js";

const router = express.Router();

router.post("/api/player", createPlayer);
router.put("/api/player/:id", updatePlayer);
router.delete("/api/player/:id", deletePlayer);
router.get("/api/player", getAllPlayers);

export default router;
