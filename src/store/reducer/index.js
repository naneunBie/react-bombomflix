import { combineReducers } from 'redux';
import { getListMovie } from './moviesReducer';

export default combineReducers({
    movies: getListMovie
})