import express from 'express';
import {createClube} from '../controllers/clubesController.js';

const router = express.Router();    


router.post("/API/clube", createClube)
/*router.put("/API/clube/:id", updateClube)
router.delete("/API/clube/:id", deleteClube)
router.get("/API/clube", getClubes)
*/
export default router;