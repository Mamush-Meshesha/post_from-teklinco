import React from "react";
import "./Form.css";
import { useDispatch,useSelector } from "react-redux";
import { fetchPostAction } from "../redux/actions/postActions";
const SearchPost = () => {
  // dispatch
  const dispach = useDispatch()
  //search form state
  const [search, setSearch] = React.useState("");
  //search form submit handler
  const handleSubmit = e => {
    e.preventDefault();

    if (search === "") {
     return alert("please provide a value")
    } else {
       dispach(fetchPostAction(search));
   }
  };

  return (
    <div className="form-header">
      <div>
        <h2>React Redux Project</h2>
        <p>
          This project is a simple React Redux project that fetches data with
          search functionality from an API
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a post"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPost;
