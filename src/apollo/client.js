import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

// Instantiate required constructor fields
const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://covid19-graphql.now.sh/ ',
})

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
})

export default client
