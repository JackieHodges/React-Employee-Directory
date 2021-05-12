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

  
    // handleInputChange = event => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   this.setState({
    //     [name]: value
    //   });
    // };
    
    render() {
      return (
        <div>
          <SearchBox
            search={this.state.search}
            // handleInputChange={this.handleInputChange}
          />
          <DataTable results={this.state.results} />
        </div>
      );
    }
  }
  
  export default SearchResultContainer;
  