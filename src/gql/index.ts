import { gql } from "@apollo/client";

export const REGISTER = gql`
    mutation signUp($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            token
            user {
                user_id
                username
                email
                verified
            }
        }
    }
`;

export const LOGIN = gql`
    query login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            login
        }
    }
`;

export const PROFILES = gql`
    query getProfiles {
        profiles {
            count
            data {
                profile_id
                name
                avatar
                bio
                location
                first_setup
                user_id
                created_at
                updated_at
            }
        }
    }
`;
