import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { clickedSong } from "../actions/songDetailAction";
import { fetchApi } from "../actions/songActions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const {loading, posts, error} = useSelector(state => state.songs)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(()=>{
        dispatch(fetchApi())
    },[])

    if(loading) <h1>Loadig...</h1>
    if(error)<h1>Error: {error}</h1>

    const SongDetail = (post) => {
        dispatch(clickedSong(post))
        navigate('/detail')

    }

    return(
        <div className="posts">
          {
            posts && (
                posts.map((post) => {
                    return(
                        <div className="post" key={post.id} onClick={()=>SongDetail(post)}>
                            <div>
                              <img src={`https://picsum.photos/200?random=${post.id}`} alt="post"/>
                            </div>
                            <div>
                            <p>User ID: {post.userId}</p>
                            <p>Title: {post.title.slice(0,10)}</p>
                            <p>Body: {post.body.slice(0,50)}</p>
                            <p>Read More...</p>
                            </div>
                        </div>
                    )
                })
            )
          }
        </div>
    )
}

export default HomePage;