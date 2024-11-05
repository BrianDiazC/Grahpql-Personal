import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { title } from 'process';


interface TodoInput {
    title: string,
    description: string,
    active?: boolean
}

export class User extends Model<InferAttributes<User, {omit: 'todos'}>, InferCreationAttributes<User, {omit: 'id'}>> {
    declare id: string
    declare name: string
    declare lastname: string
    declare email: string
    declare phone: string | null
    declare date: string
    declare country: string
    declare todos?: TodoInput[]; 
}

export class Todo extends Model <InferAttributes<Todo>, InferCreationAttributes<Todo, {omit: 'id' | 'active'}>>{ 
    declare id: CreationOptional <string>
    declare title: string
    declare description: string
    declare active: CreationOptional<boolean>
    // declare userId: CreationOptional <string>
}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        sequelize,
        modelName: 'Users',
    }
)


Todo.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
    // userId: {
    //     type: DataTypes.UUID,
    //     allowNull: false,

    // }
},
    {
        sequelize,
        modelName: 'Todos',
    }
)

export const UserTodos = User.hasMany(Todo, {foreignKey:'userId', as:'todos' });
export const TodoUSer =  Todo.belongsTo(User, {foreignKey:'userId', as:'user'});
