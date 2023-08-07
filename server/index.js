import express from "express";
import * as env from "dotenv";

// Rotas
import userRoutes from "./src/routes/userRoutes.js";

// Inicializando env
env.config();

const APP = express();

APP.use(express.json());
APP.use("/user", userRoutes);

APP.listen(process.env.SERVER_PORT, (error) => {
    if (!error) {
        console.log("Servidor inicializado com sucesso na porta: " + process.env.SERVER_PORT);
    } else {
        console.error(
            "Ocorreu um erro ao inicializar servidor na porta " + process.env.SERVER_PORT
        );
    }
});
