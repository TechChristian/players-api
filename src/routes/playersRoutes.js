import express from "express";
import {
  createPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers
} from "../controllers/playersController.js";

const router = express.Router();

router.post("/API/player", createPlayer);
router.put("/API/player/:id", updatePlayer);
router.delete("/API/player/:id", deletePlayer);
router.get("/API/player", getAllPlayers)

export default router;
