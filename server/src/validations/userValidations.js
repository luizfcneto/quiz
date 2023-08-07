
export const validateUser = (user) => {
    console.log("Validando User");

    if(!user){
        throw new Error("Bad Request, missing information");
    }

    if(!user.name){
        throw new Error("Bad Request, missing information");
    }

    if(!user.email){
        throw new Error("Bad Request, missing information");
    }

    if(!user.password){
        throw new Error("Bad Request, missing information");
    }

    if(!user.confirmPassword){
        throw new Error("Bad Request, missing information");
    }

    if(user.password !== user.confirmPassword){
        throw new Error("Bad Request, missing information");
    }

}