import React from "react";

function SearchBox() {
  return (
    <div>
    <form className="form">
      <input
        // value={this.state.firstName}
        name="searchedName"
        // onChange={this.handleInputChange}
        type="text"
        placeholder="Search"
      />
    </form>
  </div>
  );
}

export default SearchBox;