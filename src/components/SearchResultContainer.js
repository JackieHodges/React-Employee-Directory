import React, { Component } from "react";
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
      search: "",
      results: []
    };
  
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

    handleOnClick = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
  
      alert(`the users will now be sorted`);

      const results = this.state.results;
      const newOrder = results.sort((resulta, resultb) => resulta.name.first.localeCompare(resultb.name.first));
      console.log(`new Order ${newOrder}`)

      this.setState({
        results: newOrder
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
          <DataTable results={this.state.results} handleOnClick={this.handleOnClick} />
        </div>
      );
    }
  }
  
  export default SearchResultContainer;
  