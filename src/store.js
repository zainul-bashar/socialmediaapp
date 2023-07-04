import { applyMiddleware, createStore } from "redux";
import { detailSongReducer } from "./reducers/detailSongReducer";
import { songReducer } from "./reducers/songReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    songs: songReducer,
    detailSong: detailSongReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store;