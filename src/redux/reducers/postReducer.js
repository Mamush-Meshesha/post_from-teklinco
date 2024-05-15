import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, SEARCH_POST_ERROR, SEARCH_POST_REQUEST, SEARCH_POST_SUCCESS } from "../actions/postActionTypes"

//intilal state
const initialState = {
    loading: false,
    error: "",
    posts: [],
    post: {}
}
//reducers
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        //request
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        //success
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        //error
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                posts: [],
                error: action.payload,
                loading: false
            }
        // ====================single post ==========
        
        case SEARCH_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload],
                loading: false
            }
        case SEARCH_POST_ERROR:
            return {
                ...state,
                post: {},
                error: action.payload,
                loading : false
            }
        // return default state
        default: 
            return state
    }
}
//stores