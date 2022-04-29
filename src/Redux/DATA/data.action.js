import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, 
    GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, 
    POST_DATA_FAILURE,POST_DATA_REQUEST, POST_DATA_SUCCESS,
    PUT_DATA_FAILURE,PUT_DATA_SUCCESS,PUT_DATA_REQUEST
 } from "./data.actionType"


export const post_data_request = () => {
    return {
        type: POST_DATA_REQUEST
    }
}

    export const post_data_success = (payload) => {
        return {
            type: POST_DATA_SUCCESS,
            payload
        }
    }
    export const post_data_failure = (err) => {
        return {
            type: POST_DATA_FAILURE,
            payload:err
        }
    }




    export const get_data_request = () => {
        return {
            type: GET_DATA_REQUEST
        }
    }

    export const get_data_success = (payload) => {
        return {
            type: GET_DATA_SUCCESS,
            payload: payload
        }
    }
    export const get_data_failure = () => {
        return {
            type: GET_DATA_FAILURE
        }
    }

    //DELETE_CART
    export const delete_data_request = () => {
        return {
            type: DELETE_DATA_REQUEST
        }
    }

    export const delete_data_success = (payload) => {
        console.log("dlt", payload)
        return {
            type: DELETE_DATA_SUCCESS,
            payload: payload
        }
    }
    export const delete_data_failure = () => {
        return {
            type: DELETE_DATA_FAILURE
        }
    }

    export const put_data_request = () => {
        return {
            type: PUT_DATA_REQUEST
        }
    }
    
        export const put_data_success = (payload) => {
            return {
                type: PUT_DATA_SUCCESS,
                payload
            }
        }
        export const put_data_failure = (err) => {
            return {
                type: PUT_DATA_FAILURE,
                payload:err
            }
        }