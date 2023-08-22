import { createUserService, updateUserService } from "../services/UserServices.js";
import { validateCreateUser, validateUpdateUser } from "../validations/userValidations.js";

export default {
    async create(req, res, next) {
        console.log("rota: /user/create executada com sucesso");
        console.log("body request: ");
        const {user} = req.body;
        console.log(user);

        try {
            validateCreateUser(user);
        }catch(error){
            res.status(400).json({
                message: "Erro ao criar usuário, faltando informações obrigatórias"
            });
            return;
        }

        // verificar se email do corpo da requisição já esta cadastrado
        try {
            const userPersisted = await createUserService(user);

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
    },

    async update(req, res, next) {
        console.log("Rota: /user/update executada com sucesso");
        console.log("body request: ");
        const { user } = req.body; 

        try {
            validateUpdateUser(user);
        }catch (error){
            console.error(error.name, error.message);
            res.status(400).json({
                message: "Erro ao criar usuário, faltando informações obrigatórias"
            });
            return;
        }

        try{
            const newUserPersisted = await updateUserService(user);
            res.status(200).json({
                user: newUserPersisted
            });
            return;
            
        }catch (error) {
            console.error(error.name, error.message);
            res.status(404).json({
                message: error.message
            });
            return;
        }

    }
}