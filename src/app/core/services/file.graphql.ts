import gql from 'graphql-tag';

export const FileFragment = gql`
  fragment FileFragment on File {
    id
    secret
  }
`;
