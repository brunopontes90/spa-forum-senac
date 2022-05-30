import { gql } from "@apollo/client";

export default GET_USERS = gql `
query GET_USERS {
  users(order_by: {create_at: asc}) {
    id
    nomeCompleto
    email
    post
    create_at
  }
}
`