import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/config.js";

class User extends Model {};

User.init(
    {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
            field: 'id',
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },

        tokenGoogle: {
            type: DataTypes.STRING,
            field: 'tokenGoogle'
        },

        tokenFacebook: {
            type: DataTypes.STRING,
            field: 'tokenFacebook'
        }
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: false
    }
);

export default User;