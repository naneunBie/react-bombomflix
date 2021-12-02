import {
    GET_LIST_MOVIE,
    GET_LIST_MOVIE_PROCESS,
    GET_LIST_MOVIE_ERROR,
    GET_MOVIE_DETAIL,
    GET_MOVIE_DETAIL_PROCESS,
    GET_MOVIE_DETAIL_ERROR
} from '../types';


const initialValue = {
    result: [],
    loading: false,
};

export function getListMovie(state = initialValue, action) {

    switch (action.type) {
        case GET_LIST_MOVIE:
            return {
                ...state,
                result: action.payload,
                loading: false,
                error: null
            }
        case GET_LIST_MOVIE_PROCESS:
            return {
                ...state,
                result: [],
                loading: true,
                error: null
            }
        case GET_LIST_MOVIE_ERROR:
            return {
                ...state,
                result: [],
                loading: false,
                error: action.error
            }

        default:
            return state
    }
};

