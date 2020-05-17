import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import Typography from '@material-ui/core/Typography'

var GET_COUNTRIES = gql`
  {
    countries {
      name
    }
  }
`

export default function World() {
  var { loading, data, error } = useQuery(GET_COUNTRIES)

  if (loading) return <Typography>Loading...</Typography>

  if (error) return <Typography>Error</Typography>

  console.log(data)
  return <Typography>Hello world!</Typography>
}
