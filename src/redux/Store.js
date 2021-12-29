import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import rootReducer from './reducers';

const middleware = applyMiddleware(promise, thunk);  

export default createStore(rootReducer, middleware);