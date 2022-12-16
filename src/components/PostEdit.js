import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../redux/action';
import './postedit.css';

const PostEdit = ({post,showForm, allData}) => {

    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        userId: post?.userId,
        id: post?.id,
        title: post?.title,
        body: post?.body
    });

    const cancelClick = (e)=>{
            showForm(false);
    }
    const updateClick = (e)=>{
        e.preventDefault();
        if(postData.title.toString().trim()===""){
            alert("Enter the title first !");
            return;
        }
        dispatch(updatePost(postData,postData.id));
        showForm(false);
    }

    return (
        <div className='back-drop'>
                <div className='edit-form'>
                    <h3>Edit Post</h3> 
                    <form>
                        <div className='form-container'>
                            <input type="text" placeholder="Post title" onChange={(e)=>setPostData({...postData,title: e.target.value})} value={postData.title} />
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
