
export const typeDefs = `#graphql

    type User {
        id:ID!
        name: String
        lastname: String
        email: String
        phone: String
        date: String
        country: String
        todos: [Todo]!
    }

    type Todo {
        id: ID!
        title: String
        description:String,
        active: Boolean,
        userId: ID!
    }
 

    input UserInput{
        name: String!
        lastname: String!
        email: String!
        phone: String
        date: String
        country: String
        title: String
        descrition: String
    }

    input userToUpdate {
        name: String
        lastname: String
        email: String
        phone: String
        date: String
        country: String
        title: String
        descrition: String
    }

 
    type Query {
        getUsers: [User]
        getTodos: [Todo]
    }

    type Mutation {
        createUser(user:UserInput!): User
        updateUser(id:String!):User
        deleteTodo(id:String!):Todo
    }

`