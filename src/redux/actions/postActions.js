//actions creator
//1, fetch posts( request started,success,failure)
import apiURL from "../../utils/apiURL";
import axios from "axios";
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  SEARCH_POST_ERROR,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "./postActionTypes";

//request started
const fetchPostsRequest = (posts) => {
  return {
    type: FETCH_POSTS_REQUEST,
    payload: posts,
  };
};

// success
const fetchPostsSuccess = (error) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: error,
  };
};

//error
const fetchPostsError = () => {
  return {
    type: FETCH_POSTS_ERROR,
  };
};
const fetchPostsAction = () => {
  return async (dispatch) => {
    //request action
    dispatch(fetchPostsRequest());
    try {
      // success action
      const res = await axios.get(apiURL);
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      //error action
      dispatch(fetchPostsError(error));
    }
  };
};

//2, fetch post( request started,success,failure)

//request started
const fetchPostRequest = () => {
  return {
    type: SEARCH_POST_REQUEST,
  };
};

//succcess
const fetchPostSuccess = (post) => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: post,
  };
};

//error
const fetchPostError = (error) => {
  return {
    type: SEARCH_POST_ERROR,
    payload: error,
  };
};

//fetch actions

const fetchPostAction = (id) => {
  return async (dispatch) => {
    // request started
    dispatch(fetchPostRequest());
    try {
      //success
      const res = await axios.get(`${apiURL}/${id}`);
      dispatch(fetchPostSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostError(error));
    }
  };
};
export { fetchPostAction, fetchPostsAction };
