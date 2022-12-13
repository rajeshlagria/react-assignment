import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../redux/action';
import './postedit.css';

const PostEdit = ({post,showForm, allData}) => {

    console.log("props -->",post);
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        userId: post?.userId,
        id: post?.id,
        title: post?.title,
        body: post?.body
    });

    const cancelClick = (e)=>{
            console.log("Cancel clicked");
            showForm(false);
    }
    const updateClick = (e)=>{
        e.preventDefault();
        dispatch(updatePost(postData,postData.id));
        console.log("update clicked", postData);
        showForm(false);
    }

    const titleLostFocus = (e, val)=>{
        console.log("title lost focus");
        e.preventDefault();
        const filteredPosts = allData.posts.filter(record => record.title === val);
        console.log("filtered post--> ",...filteredPosts);
        setPostData(...filteredPosts);
    }

    return (
        <div className='back-drop'>
                <div className='edit-form'>
                    <h3>Edit Post</h3> 
                    <form>
                        <div className='form-container'>
                            <div>
                                <input type="text" placeholder="Post title" onChange={(e)=>setPostData({...postData,title: e.target.value})} value={postData.title} />
                                <button style={{height: "30px"}} onClick={ (e) => titleLostFocus(e,postData.title)}>Get data</button>
                            </div>
                            <textarea placeholder='Post content'  onChange={(e)=>setPostData({...postData,body: e.target.value})} value={postData.body}></textarea>
                            <div>
                                <input type="submit" value="Update" onClick={(e)=>updateClick(e)} />
                                <input type="button" value="Cancel" onClick={cancelClick} />
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default PostEdit;