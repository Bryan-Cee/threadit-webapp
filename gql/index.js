import { gql } from "apollo-boost";

// eslint-disable-next-line import/prefer-default-export
export const REGISTER = gql`
    mutation SignUp($email: String!, $password: String!){
        register(email: $email, password: $password)
    }
`;

export const LOGIN = gql`
    mutation SignIn($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                userId
                username
                email
            }
        }
    }
`;

export const VERIFYACCOUNT = gql`
    mutation verifyAccount{
        verifyAccount{
            token
            user{
                userId
                username
                email
                verified
            }
        }
    }
`;
