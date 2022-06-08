import { gql } from "@apollo/client";

export const ADD_USER = gql `
mutation AddUsers {
  insert_users(objects: {nomeCompleto: "", email: "", postagem: ""}) {
    affected_rows
  }
}
`


export const DELETE_USERS = gql `
mutation DeleteUsers {
  delete_users(where: {id: {_eq: id}}) {
    affected_rows
  }
}

`

export const UPDATE_POST = gql `
mutation updatePost {
  update_users(where: {nomeCompleto: {_eq: "nomeCompleto"}, email: {_eq: "email"}, postagem: {_eq: "postagem"}}) {
    affected_rows
  }
}
`