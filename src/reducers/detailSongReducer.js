import { CLICKED_SONG } from "../actions/actionsType";

const initialValue = {
    post: {}
}
export const detailSongReducer = (state=initialValue, actions) => {

    switch(actions.type){
        case CLICKED_SONG:
            return {...state, post: actions.payload}
        default:
            return state
    }
}