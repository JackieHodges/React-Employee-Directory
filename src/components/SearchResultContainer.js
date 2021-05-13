import React, { Component } from "react";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
      search: "",
      results: []
    };
  
    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
      this.getUsers(25);
    }
  
    getUsers = (query) => {
      API.search(query)
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    };

  
    handleInputChange = event => {
      const value = event.target.value;
      const results = this.state.results
      console.log(`value ${value}`)

      const newResults = results.filter((result) => result.name.first.startsWith(`${value}`));
      console.log(`new Results ${newResults}`)

      this.setState({
        search: value,
        results: newResults
      });

    };
    
    render() {
      return (
        <div>
          <SearchBox
            name="search"
            value={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <DataTable results={this.state.results} />
        </div>
      );
    }
  }
  
  export default SearchResultContainer;
  