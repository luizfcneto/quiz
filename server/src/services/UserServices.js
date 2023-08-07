import User from "../models/User.js";

export const createUserService = async (user) => {
    console.log("executando createUserService")
    await User.sync();
    
    const userExists = await User.findOne({ where: { email: user.email } });

    if(!userExists){
        const responseUserCreate = await User.create(user);
        return responseUserCreate.dataValues;
    }else {
        throw new Error("Bad Request, user already exists");
    }
}