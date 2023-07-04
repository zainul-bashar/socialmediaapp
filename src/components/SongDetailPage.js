import React from "react";
import { useSelector } from "react-redux";

 const SongDetailPage = () => {

    const detailPage = useSelector((state) => state.detailSong.post);

if(!detailPage) return <h1>Loading...</h1>

    return(
        <div className="posts">
                    <div key={detailPage.userId}  className=" post"  >
                           <div>
                              <img src={`https://picsum.photos/200?random=${detailPage.id}`} alt="post"/>
                            </div>
                            <div>
                            <p>User ID: {detailPage.userId}</p>
                            <p>Title: {detailPage.title}</p>
                            <p>Body: {detailPage.body}</p>
                            </div>
                    </div>
 
            
        </div>
    )
 }

 export default SongDetailPage;