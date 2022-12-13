import React, { useState, useEffect } from "react";
import './posts.css';

const Card = ({post, postData})=>{
    const [postD, setPostD] = useState(post)
    useEffect(() => {
        setPostD(post)
    }, [post])
    
    const modifyPost = ()=>{
        postData(post);
    }

    return(
            <div className="card">
                <h4 className="title">{postD.title}</h4>
                <div className="text-container">
                    <p>{postD.body}</p>
                </div>
                <div className="footer">
                    <button onClick={modifyPost}>Modify Post</button>
                </div>
            </div>
    )
}

export default Card;