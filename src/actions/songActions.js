import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from "./actionsType";
import axios from "axios";

export const fetchdataRequest = () => {
    return{
        type: FETCH_DATA_REQUEST
    }
}

export const fetchdataSuccess = (posts)=>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload: posts
    }
}

export const fetchdataError = () =>{
    return{
        type: FETCH_DATA_ERROR
    }
}

export const fetchApi = () => {
    return (dispatch) => {
        dispatch(fetchdataRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => dispatch(fetchdataSuccess(response.data)))
        .catch((error) => dispatch(fetchdataError(error)))

    }
}