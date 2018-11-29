import React, { Component } from 'react';

//declare javascript class
class SearchBar extends Component {
  //SearchBar is a subclass of Component. Calling the parent method that is already defined (constructor) by calling super(props)
  constructor(props) {
    super(props);
    //initialize state by calling a new object and setting it to this.state object we pass contains properties that we want to record. Constructor is the only time we will change state like this
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

//naming conventions: "on" or "handle" + name of element + event

}

export default SearchBar;
