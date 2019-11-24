import {gql} from 'apollo-boost';

export let LOGIN_USER = gql`
    query loginUser($username:String! $password:String!){
        loginShop(username:$username,password:$password),
    }
`;




