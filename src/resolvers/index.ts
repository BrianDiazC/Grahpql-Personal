import { todosMutation, todosQuery } from "./todoResolves"
import { usersMutation, usersQuery } from "./userResolvers"

export const resolvers = {
    Query: {
        ...usersQuery,
        ...todosQuery
    },

    Mutation: {
        ...usersMutation,
        ...todosMutation
    }
}