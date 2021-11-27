import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initalState = {

}

const middleware = [thunk]

const store = createStore(rootReducer, initalState, applyMiddleware(...middleware));

export default store;