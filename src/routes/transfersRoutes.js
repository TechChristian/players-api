import express from 'express';
import {
    createTransfer
   // updateTransfer,
   // getAllTransfers
} from '../controllers/transfersController.js'; 

const router = express.Router();

router.post("/api/transfer", createTransfer);
//router.update("/api/transfer/:id", updateTransfer);
//router.get("/api/transfer", getAllTransfers);

export default router;