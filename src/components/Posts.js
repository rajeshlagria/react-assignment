import React, { useEffect, useState } from "react";
import Card from "./Card";
import './posts.css';
import PostEdit from "./PostEdit";
import { useSelector, useDispatch } from "react-redux";
import { postList } from "../redux/action";

const Posts = () => {

    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [modifyData, setModifyData] = useState();

    const postData = useSelector(state => state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postList());
    }, [])

    const postDataEvent = (val)=>{
        setModifyData(val);
        setShowUpdateForm(true);
    }

    return (
        <div className="container">
            <h3>Posts</h3>
            <div>
                {
                    postData?.posts?.map((post, index) => (
                        <Card post={post} postData={postDataEvent} key={post?.id} />
                    ))
                }
            </div>
            { showUpdateForm && <PostEdit showForm={(val)=>setShowUpdateForm(val)} post={modifyData} allData={postData} /> }
            
        </div>
    )
}

export default Posts;