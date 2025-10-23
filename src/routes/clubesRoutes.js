import express from 'express';
import {createClube, updateClube, deleteClube, getClubes } from '../controllers/clubesController.js';

const router = express.Router();    


router.post("/CreateClub", createClube)
router.put("/update/:id", updateClube)
router.delete("/delete/:id", deleteClube)
router.get("/Clubes", getClubes)

export default router;