import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Pokeman from "./components/Pokeman/Pokeman";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  
  render() {
    return (
      <Wrapper>
        <Header />
        {/* {this.state.pokeman.map(pokeman => ( */}
          <Pokeman
            pokeman={this.state.data}
          />
      </Wrapper>
    );
  }
}

export default App;