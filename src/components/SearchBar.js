import React from "react"
import "./SearchBar.css"

class SearchBar extends React.Component {
//I need to first set the state of my searchbar to empty
  state = {term: ""}

//When the user fills in the searchbar, i have to change the state of my searchbar to what was typed i.e. event.target.value
//After updating the state, the component re-renders, and then the value of the input will now be the updated setState
  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }

//When the user submits the form, i want to tell this to my parent component, so my parent component can request data from the API
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <h1>IP Address Tracker</h1>
        <div className="search-input">
          <form onSubmit={this.onFormSubmit} className="form">
            <input
            type="text"
            placeholder="Search for any IP address or domain"
            value={this.state.term}
            onChange={this.onInputChange}
            />
            <button className="button" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg></button>
          </form>
        </div>

      </div>
    )
  }

}

export default SearchBar
