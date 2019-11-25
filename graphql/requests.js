import {gql} from 'apollo-boost';

export let LOGIN_USER = gql`
    query loginUser($username:String! $password:String!){
        loginShop(username:$username,password:$password),
    }
`;

export let VERIFY_SHOP = gql`
    query  getShopData{
            verifyShop {
                _id
                admin_id
                email
                username
                password
                shop_image
                business_type
                legal_name
                phone
                legal_address{
                    region
                    district
                    others
                    location
                }
                category_id
                balance
                purchase_balance
            }
        
    }
`;





