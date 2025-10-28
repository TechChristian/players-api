import express from 'express';
import {createClube, clubeUpdate, deleteClube, getAllClubes} from '../controllers/clubesController.js';

const router = express.Router();    


router.post("/API/clube", createClube)
router.put("/API/clube/:id", clubeUpdate)
router.delete("/API/clube/:id", deleteClube)
router.get("/API/clube", getAllClubes)

export default router;