import express from "express";

const APP = express();
const PORT = 3000;

APP.use(express.json());

APP.listen(PORT, (error) => {
    if (!error) {
        console.log("Servidor inicializado com sucesso na porta: " + PORT);
    } else {
        console.error(
            "Ocorreu um erro ao inicializar servidor na porta " + PORT
        );
    }
});
