import {configureStore} from '@reduxjs/toolkit'
import { postData } from './reducer';
import createSagaMiddleware from 'redux-saga';
import postSagaMiddleware from './postSagaMiddleware';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({reducer: postData, middleware:()=>[sagaMiddleware]});

sagaMiddleware.run(postSagaMiddleware);

export default store;