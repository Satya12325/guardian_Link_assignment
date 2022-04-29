import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, 
    GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS ,
    POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS,
    PUT_DATA_FAILURE,PUT_DATA_SUCCESS,PUT_DATA_REQUEST
} from "./data.actionType"

const initState = {
    data : [],
    isLoading : false,
    isError : false

}
export const data_reducer = (state=initState,{type,payload})=>{
    switch(type){

        //post

        case POST_DATA_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case POST_DATA_SUCCESS : 
            return {
                ...state,
                isLoading : false,
                isError : false,
               
            }
        case POST_DATA_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true
            }


        // get 
        case GET_DATA_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case GET_DATA_SUCCESS : 
            return {
                ...state,
                isLoading : false,
                isError : false,
                data : payload
            }
        case GET_DATA_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true
            }

            //put
            case PUT_DATA_REQUEST :
                return {
                    ...state,
                    isLoading : true,
                    isError : false
                }
            case PUT_DATA_SUCCESS : 
                return {
                    ...state,
                    isLoading : false,
                    isError : false,
                   
                }
            case PUT_DATA_FAILURE :
                return {
                    ...state,
                    isLoading : false,
                    isError : true
                }


            //DELETE
            case DELETE_DATA_REQUEST :
                return {
                    ...state,
                    isLoading : true,
                    isError : false
                }
            case DELETE_DATA_SUCCESS : 
                return {
                    ...state,
                    isLoading : false,
                    isError : false,
                    cart : state.data.filter((item)=>{
                        return(
                                item.id!==payload
                        )
                    })
                }
            case DELETE_DATA_FAILURE :
                return {
                    ...state,
                    isLoading : false,
                    isError : true
                }
        default :
            return state
    }

}