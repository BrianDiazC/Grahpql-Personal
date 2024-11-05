import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Todo = sequelize.define(
    'Todos', {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
)