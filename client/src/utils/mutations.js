import { gql } from '@apollo/client'

export const loginUser = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        saveBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`

export const save_Book = gql`
  mutation saveBook($newBook: InputBook!) {
    saveBook(newBook: $newBook) {
      _id
      username
      email
      saveBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`

export const delete_Book = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      saveBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`
