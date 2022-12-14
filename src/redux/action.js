import { FAILURE, UPDATE_POST, SEARCH_POST, POST_LIST, GET_ALL_POST } from "./constants"

export const postList = () => {
  
    return {
        type: POST_LIST
    }
}

export const postSearch = (query) =>{
    return {
        type: SEARCH_POST,
        query
    }
}

export const updatePost = (payload, postId) =>{
    return {
        type: UPDATE_POST,
        payload,
        postId
    }
}

export const successAction = (data) => {
        return { 
            type: GET_ALL_POST, 
            data:data.data 
        }
};
export const failureAction = (error) => {
    return { 
        type: FAILURE, 
        payload: {error, err: true} 
    }
};