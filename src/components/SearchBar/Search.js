import React, { Component } from 'react';
import axios from 'axios';
import Results from '../Results';
import './Search.css';

const API_URL = 'https://intern-pokedex.myriadapps.com/api/v1/pokemon?name='

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    query: '',
    results: []
  }
}

  getInfo = () => {
    axios.get(`${API_URL}${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Pokedex"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Results results={this.state.results} />
       
      </form>
    )
  }
}

export default Search