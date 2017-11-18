// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from './user/fields/query'
import * as product from './product/fields/query'
import * as crate from './crate/fields/query'
import * as subscription from './subscription/fields/query'

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [Read]',

    fields: () => ({
        ...user,
        ...product,
        ...crate,
        ...subscription
    })
})

export default query