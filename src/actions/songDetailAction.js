import { CLICKED_SONG } from "./actionsType";

 export const clickedSong = (post) => {
    return{
        type: CLICKED_SONG,
        payload: post
    }
}