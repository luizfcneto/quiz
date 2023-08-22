import User from "../models/User.js";

export const findUserById = async (id) => {
    console.log("executando findUserById");
    await User.sync();

    return await User.findByPk(id);
}

export const createUserService = async (user) => {
    console.log("executando createUserService");
    await User.sync();
    
    const userExists = await findUserById(user.id);

    if(!userExists){
        return await User.create(user);
    }else {
        throw new Error("Bad Request, user already exists");
    }
}

export const updateUserService = async (newUser) => {
    console.log("executando updateUserService");
    await User.sync();

    let userPersisted = await findUserById(newUser.id);

    if(userPersisted) {
        userPersisted.name = newUser.name;
        userPersisted.password = newUser.password;
        return await userPersisted.save();

    }else {
        throw new Error("Error, user not found");
    }
}

export const deleteUserService = async (id) => {
    console.log("deleteUserService executado");
    await User.sync();

    let userPersisted = await findUserById(id);
    
    if(!userPersisted){
        throw new Error("Error, user not found");
    }

    await userPersisted.destroy();
    // await User.destroy({where: { id: id }});
}