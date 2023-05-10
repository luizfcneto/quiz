const express = require("express");

const APP = express();
const PORT = 8081;

APP.get("/status", (request, response) => {
    response.status(200);
    response.send("Servidor Online");
});

APP.listen(PORT, (error) => {
    if (!error) {
        console.log("Servidor inicializado com sucesso na porta: " + PORT);
    } else {
        console.error(
            "Ocorreu um erro ao inicializar servidor na porta " + PORT
        );
    }
});
