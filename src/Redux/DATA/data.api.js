import { delete_data_failure, delete_data_request, delete_data_success, 
    get_data_failure, get_data_request, get_data_success,
    post_data_failure, post_data_request, post_data_success,
    put_data_failure,put_data_success,put_data_request
} from "./data.action"
import axios from "axios";


export const addData = (payload) => (dispatch) => {
    dispatch(post_data_request());
    return axios
      .post("https://guardian-link-assignment-api.herokuapp.com/data", {
        ...payload,       
      })
      .then((res) => {
        dispatch(post_data_success(res.data));
        dispatch(get_dataapi());
      })
      .catch((err) => {
        console.log(err);
        dispatch(post_data_failure(err));
      });
  };


  // get_dataapi()


export const get_dataapi = (params)=>(dispatch)=>{
    dispatch(get_data_request())
    axios
    .get("https://guardian-link-assignment-api.herokuapp.com/data")
    .then((res)=>{
        console.log(res.data)
        dispatch(get_data_success(res.data))
        
    })
    .catch((err)=>{
        dispatch(get_data_failure())
        console.log(err)
    })

}

// get_dataapi();

export const delete_api = (id)=>(dispatch)=>{
   console.log("id",id)
    dispatch(delete_data_request());
    axios
    .delete(`https://guardian-link-assignment-api.herokuapp.com/data/${id}`)
    .then((res)=>{
        dispatch(delete_data_success(id))
        console.log(res)
        dispatch(get_dataapi());
    })
    .catch((res)=>{
        dispatch(delete_data_failure())
        console.log(res)
    })
}

export const Put_api = ({id,payload})=>(dispatch)=>{
  console.log("id",id)
   dispatch(put_data_request());
   axios
   .put(`https://guardian-link-assignment-api.herokuapp.com/data/${id}`,payload)
   .then((res)=>{
       dispatch(put_data_success(id))
       console.log(res)
       dispatch(get_dataapi());
   })
   .catch((res)=>{
       dispatch(put_data_failure())
       console.log(res)
   })
}


