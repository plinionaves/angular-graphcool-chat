import gql from 'graphql-tag';

export interface LoggedInUserQuery {
  loggedInUser: { id: string };
}

export const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`;

export const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthenticateUserMutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const SIGNUP_USER_MUTATION = gql`
  mutation SignupUserMutation($name: String!, $email: String!, $password: String!) {
    signupUser(name: $name, email: $email, password: $password) {
      id
      token
    }
  }
`;
