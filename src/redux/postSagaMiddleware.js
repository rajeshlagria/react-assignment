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

function* postSagaMiddleware() {
    yield takeEvery(POST_LIST, getPosts)
}

export default postSagaMiddleware;
