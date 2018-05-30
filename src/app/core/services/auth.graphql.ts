import gql from 'graphql-tag';

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
