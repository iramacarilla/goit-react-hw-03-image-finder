import React, {Component} from 'react'

export default class Searchbar extends Component {
   state = {inputValue : ''}

   handelChange = (e) => {
    this.setState({inputValue: e.target.value})
   }
   handelSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue:'' })
   }

   render () {
    return (
        <header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handelSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handelChange}
    />
  </form>
</header>
    )
}
}


