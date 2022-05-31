import { gql } from "@apollo/client";

export default GET_USERS = gql `
query GetUsers {
  users(order_by: {created_at: asc}) {
    id
    nomeCompleto
    email
    postagem
    created_at
  }
}

`