import React, { useEffect } from "react";
import SearchPost from "./SearchPost";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { fetchPostsAction } from "../redux/actions/postActions";

const PostsList = () => {
  //dispach acttion
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchPostsAction());
  }, [dispach]);

  //get data from store
  const { loading, error, posts, post } = useSelector((data) => data);
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts { posts.length}</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2 style={{color: "red"}}>{error.response.status && "Post Not found With This Id"}</h2>
        ) : (
          posts.map((post, id) => (
            <div key={id} className="post-details">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostsList;
