import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index.js';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    reduxThunk,
    sagaMiddleware
];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export default store;