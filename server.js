import express from 'express';
import ClubesRoutes from "./src/routes/clubesRoutes.js";
import playersRoutes from "./src/routes/playersRoutes.js";

const app = express();
app.use(express.json());

app.use('/', ClubesRoutes);
app.use('/', playersRoutes);

app.listen(3000, () => console.log("Server rodando na porta 3000"));