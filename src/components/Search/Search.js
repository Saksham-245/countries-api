import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="Search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={props.change}
      ></input>
    </div>
  );
};

export default Search;
