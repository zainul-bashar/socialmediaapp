import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../actions/actionsType";

const initialValue = {
    loading: false,
    posts: [],
    error: ''
}

export const songReducer = (state=initialValue, actions) => {
     switch(actions.type){
        case FETCH_DATA_REQUEST:
            return {...state, loading: true}
        case FETCH_DATA_SUCCESS:
            return {...state, loading: false, posts: actions.payload, error: ''}
        case FETCH_DATA_ERROR:
            return {...state, loading: false, posts: [], error: actions.type}
        default:
            return state
     }
}