import React from "react";

function SearchBox(props) {
  return (
    <div>
    <form className="form">
      <input
        value={props.search}
        name="search"
        id="search"
        // onChange={this.handleInputChange}
        type="text"
        placeholder="Search"
      />
    </form>
  </div>
  );
}

export default SearchBox;