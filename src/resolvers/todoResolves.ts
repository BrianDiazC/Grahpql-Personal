import { Todo } from '../models/User.Model';


interface IdInput{
    id:string
}

export const todosQuery = {

    getTodos: async() =>{

        const todos = await Todo.findAll();

        return todos.map(todo => todo.toJSON());


 
    }
}

export const todosMutation = {
  //Todo:LLEvar esta mutation a otro Archivo que pertenezcan a los Resolvers de Todos
    //Todo: Resolver que vea el Todo Actualizado



    deleteTodo: async(parent:any, args:IdInput, context:any, info:any )=> {
        const {id} = args

        console.log(id)

        const todo = await Todo.update(
            {active: true},
            {where:{id}} );

            console.log(todo)

        return todo;
    }

}