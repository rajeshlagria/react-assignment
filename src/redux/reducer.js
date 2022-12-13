import { GET_ALL_POST, UPDATE_POST, SEARCH_POST, FAILURE } from "./constants"

const defaultData = {};
export const postData = (data = [], action) => {
    switch (action.type) {
        case GET_ALL_POST:
            console.warn("all post-->> ", action.data);
            defaultData['data'] = action.data;
            return action.data;

        case UPDATE_POST:
            const newData = defaultData.data.posts.map((val)=>{
                if(val.id == action.postId){
                    val = action.payload;
                }
                return val;
            })
            defaultData.data["posts"] = newData;
            console.warn("modified post-->> ", defaultData.data);
            return defaultData.data;

        case SEARCH_POST:
            const posts = defaultData.data.posts.filter(record => record.title.includes(action.query));
            return {posts};

        case FAILURE:
            return {posts: action.payload};

        default:
            return data;
    }
}