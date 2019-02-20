import React, { Component } from 'react';
import Error from './Error';
import PokemanCard from './PokemanCard';
import axios from 'axios';

class Pokeman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false

        };
    }
    componentDidMount() {
        const url = `https://intern-pokedex.myriadapps.com/api/v1/pokemon?`;

        axios.get(url)
         .then((response) => {
            this.setState({
                data: response.data.data
            })
            console.log(response)
         })
         .catch((error) => {
             console.log(error);
         })
         .then(() => {

         })
        
    }

    renderItems() {
        if (!this.state.error) {
            return this.state.data.map((item) => (
                <PokemanCard key={item.id} item={item} />
            ));
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        );
    }
}

export default Pokeman;  