import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './client'

export default function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
