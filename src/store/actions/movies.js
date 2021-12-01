import axios from "axios";
import {
    GET_LIST_MOVIE,
    GET_LIST_MOVIE_ERROR,
    GET_MOVIE_SEARCH,
    GET_MOVIE_SEARCH_ERROR
} from '../types';


export const getListMovie = (param) => async dispatch => {
    try {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${param}`);
        dispatch({
            type: GET_LIST_MOVIE,
            payload: res.data
        });


    } catch (error) {
        dispatch({
            type: GET_LIST_MOVIE_ERROR,
            payload: error
        });
    }
}

