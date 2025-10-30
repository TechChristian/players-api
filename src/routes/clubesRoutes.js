import express from 'express';
import {createClube, clubeUpdate, deleteClube, getAllClubes} from '../controllers/clubesController.js';

const router = express.Router();    


router.post("/api/clube", createClube)
router.put("/api/clube/:id", clubeUpdate)
router.delete("/api/clube/:id", deleteClube)
router.get("/api/clube", getAllClubes)

export default router;