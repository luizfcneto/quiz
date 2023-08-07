import { createUserService } from "../services/UserServices.js";
import { validateUser } from "../validations/userValidations.js";

export default {
    async create(req, res, next) {
        console.log("rota: /user/create executada com sucesso");
        console.log("body request: ");
        console.log(req.body.user);

        try {
            validateUser(req.body.user);
        }catch(error){
            res.status(400).json({
                message: "Erro ao criar usuário, faltando informações obrigatórias"
            });
            return;
        }

        // verificar se email do corpo da requisição já esta cadastrado
        try {
            const userPersisted = await createUserService(req.body.user);

            res.status(201).json({
                message: "Cadastrado com sucesso!"
            });
            return;

        } catch(error){
            console.error(error.name, error.message);
            res.status(400).json({
                message: error.message
            });
            return;
        } 
    }
}