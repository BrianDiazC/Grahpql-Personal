import { title } from 'process';
import { Todo, TodoUSer, User, UserTodos } from '../models/User.Model';
import { UserInput } from '../types/user.type';


interface PlainUser {
    id: string;
    name: string;
    lastname: string;
    email: string;
    phone: string | null;
    date: string;
    country: string;
    createdAt?: Date;
    updatedAt?: Date;
    todos?: Todo[]; // Asegúrate de que 'todos' sea opcional
}

export const usersQuery = {
    getUsers: async (parent: any, args: any, context: any, info: any) => {

        
        const users = await User.findAll({
            // raw:true,
            // nest: true,
            include: [
              {
               model:Todo,
                as: 'todos'
              }
            ]
        })

        const usersArray =users.map(user => user.toJSON());
        return usersArray;





    //     userArray.push(Users.toJSON());
    //     //console.log(Users.toJSON())
    //     console.log(userArray)


    //    return userArray;
       
    }
}


export const usersMutation = {

    createUser: async (parent: any, args: UserInput, context: any, info: any) => {

        const { user } = args

        const userCreated = await User.create(
            {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                country: user.country,
                date: user.date,
                phone: user.phone,
                todos: [{
                    title: user.title,
                    description: user.descrition
                }]
            },
            {
                include: [
                    {
                        association: UserTodos,
                        include:[TodoUSer],
                        as: 'todos'
                    }
                ]
            }
        );
9
        console.log(userCreated.toJSON())
        return userCreated.toJSON();
      
    },

    //TODO: Realizar este mutation
    updateUser: async(parent:any, id:string, context:any, info:any ) => {

    },

  
}