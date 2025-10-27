import express from 'express';
import {createClube, clubeUpdate} from '../controllers/clubesController.js';

const router = express.Router();    


router.post("/API/clube", createClube)
router.put("/API/clube/:id", clubeUpdate)
/*router.delete("/API/clube/:id", deleteClube)
router.get("/API/clube", getClubes)
*/
export default router;