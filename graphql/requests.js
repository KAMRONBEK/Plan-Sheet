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

export let GET_MAIN_CATEGORY = gql`
    query {
        verifyShop {
            category_id
        }
    }
`;

export let GET_SHOP_CATEGORY = gql`
    query {
        verifyShop {
            _id
            admin_id
            purchase_balance
            balance
            legal_name
            email
        }
    }
`;

export let GET_CHILD_CATEGORY = gql`
    query  wrapper($parentCategoryID:String!){
        getCategoryChilds(_id:$parentCategoryID){
            _id
            name
            path
        }
    }
`;


export let GET_PRODUCT_UNDER_CATEGORY = gql`
    query wrapper($category_id:String! $pageSize:Int! $next:Int!) {
        getProductBatchUnderCategory(category_id:$category_id, pageSize:$pageSize, next:$next){
            next
            hasMore
            products{
                _id
                name
                images
                min_order
                count_measurement
                price
            }
        }}
`;

export let GET_PRODUCT_DATA = gql`
    query
    wrapper($product_id:String!){
        getProductById(_id:$product_id){
            _id
            admin_id
            manufacturer_id{
                _id
                legal_name
                brand_name
                brand_picture
                bussiness_type
            }
            category_path
            name
            short_desc
            long_desc
            tags
            images
            thumbnail
            price
            discount
            stock{
                _id
                title
                value
                price
                discount
                image
                count
                sold
            }
            count_measurement
            min_order
            max_order
            weight
            size{
                x
                y
                z
            }
            is_hot
            is_promoting
            approved
            disapproval_message
            viewed
            loves
            stars
        }
    }
`;







