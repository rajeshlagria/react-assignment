import { takeEvery, put, call } from 'redux-saga/effects'
import { getAllPosts } from './api';
import { POST_LIST } from './constants';
import { successAction, failureAction } from './action';


export function* getPosts() {
    try {
        const data = yield call(getAllPosts);
        yield put(successAction(data));
    } catch (err) {
        yield put(failureAction(err?.response?.data || null));
    }
}


// function* searchPosts(data) {
//     let result = yield axios.get(`/searchpost?title=${data.query}`);
//     console.log("get in saga search ---> ",result.data);
//     yield put({type: GET_ALL_POST, data:result.data})
// }

function* postSagaMiddleware() {
    yield takeEvery(POST_LIST, getPosts)
    // yield takeEvery(SEARCH_POST, searchPosts)
}

export default postSagaMiddleware;
