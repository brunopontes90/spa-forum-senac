import { gql } from "@apollo/client";

export default GET_USERS = gql `
query GET_USERS {
    users {
      id
      nomeCompleto
      email
      post
    }
  }
`