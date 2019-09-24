/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange= (event) => {
    return this.props.searchFunction(event.currentTarget.value);
  };

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
