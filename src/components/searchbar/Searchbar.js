import React, {Component} from 'react'
import styles from './Search.module.css'

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
        <header className={styles.Searchbar}>
  <form className={styles.SearchForm} onSubmit={this.handelSubmit}>
    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={styles.SearchFormInput}
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


