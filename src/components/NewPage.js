import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';


class NewPage extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=3' />
    }
  }
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
       </div>
    )
  }
}
export default NewPage;