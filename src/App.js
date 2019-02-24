import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokeman from "./components/Pokeman/Pokeman";
import Search from "./components/SearchBar/Search";
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  render() {
    return (
      <Router>
        <div className='app'>
        <Search />
        <Switch>
        <Route exact path="/" render={(props) => (
              <Pokeman pokeman={this.state.data} /> )} />
        <Route exact path="/results" render={(props) => ( <Results results={this.state.data} />)}/>
      </Switch>
        </div>
     </Router>
    );
  }
}

export default App;