import { gql } from "@apollo/client";

export const ADD_USER = gql `
mutation AddUsers {
  insert_users(objects: {nomeCompleto: "", email: "", postagem: ""}) {
    affected_rows
  }
}
`;