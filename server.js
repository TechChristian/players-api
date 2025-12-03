import express from "express";
import ClubesRoutes from "./src/routes/clubesRoutes.js";
import playersRoutes from "./src/routes/playersRoutes.js";
import transfersRoutes from "./src/routes/transfersRoutes.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

const swaggerDocs = JSON.parse(
  fs.readFileSync(new URL("./swagger/swagger.json", import.meta.url))
);

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/", ClubesRoutes);
app.use("/", playersRoutes);
app.use("/", transfersRoutes);

app.listen(3000, () => console.log("Server rodando na porta 3000"));
