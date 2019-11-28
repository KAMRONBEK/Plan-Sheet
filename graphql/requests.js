import {gql} from 'apollo-boost';

export let LOGIN_USER = gql`
    query loginUser($username:String! $password:String!){
        loginShop(username:$username,password:$password),
    }
`;

export let GET_ROOT_CATEGORY = gql`
    query {
        getRootCategory {
            _id
            name
            parent
            path
        }
    }
`;

export let GET_FIRST_CATEGORY = gql`
    query  getCategoryChildsWrapper($parentCategoryID:String!){
        getCategoryChilds(_id:$parentCategoryID){
            _id
            name
            path
        }
    }
`;




