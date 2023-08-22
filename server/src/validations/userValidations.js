
export const validateCreateUser = (user) => {
    console.log("Validando Create User");
    validateUser(user);
    validateUserName(user);
    validateUserEmail(user);
    validateUserPassword(user);
    validateUserConfirmPassword(user);
}

export const validateUpdateUser = (user) => {
    console.log("Validando Update User");
    validateUser(user);
    validateUserId(user);
    validateUserName(user);
    validateUserEmail(user);
    validateUserPassword(user);
    validateUserConfirmPassword(user);
}

const validateUserId = (user) => {
    if(!user.id) {
        throw new Error("Bad Request, missing information");
    }
}

const validateUser = (user) => {
    console.log("Validando corpo da requisição user");
    if(!user){
        throw new Error("Bad Request, missing information");
    }
}

const validateUserName = (user) => {
    console.log("Validando nome de usuario");
    if(!user.name){
        throw new Error("Bad Request, missing information");
    }
}

const validateUserEmail = (user) => {
    console.log("Validando email de user");
    if(!user.email){
        throw new Error("Bad Request, missing information");
    }
}

const validateUserPassword = (user) => {
    console.log("Validando senha de user");
    if(!user.password){
        throw new Error("Bad Request, missing information");
    }

}

const validateUserConfirmPassword = (user) => {
    console.log("Validando confirmPassword de user");
    if(!user.confirmPassword){
        throw new Error("Bad Request, missing information");
    }

    if(user.password !== user.confirmPassword){
        throw new Error("Bad Request, missing information");
    }
}