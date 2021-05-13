import React from "react";

function SearchBox(props) {
  return (
    <div>
    <form className="form">
      <input
        value={props.value}
        name="search"
        id="search"
        onChange={props.handleInputChange}
        type="text"
        placeholder="Search"
      />
    </form>
  </div>
  );
}

export default SearchBox;