import { GraphQLClient } from 'graphql-request'

if (!process.env.HASURA_ENDPOINT || !process.env.HASURA_ADMIN_SECRET) {
    console.log(Error('GraphQl endpoint params dont specified'))
    process.exit(1)
}

export default new GraphQLClient(process.env.HASURA_ENDPOINT, {
    headers: {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
})
