import React from 'react';
import './PokemanCard.css';
// import CardDetail from './CardDetail';

const PokemanCard = ({item}) => (
    <div className='col'>
        <div className='card'>
        <a href={`https://intern-pokedex.myriadapps.com/api/v1/pokemon/${item.id}`} target='_blank' rel="noopener noreferrer">
        <span className='card-title'>{item.name}</span>
            <div className='card-image'>
                <img src={item.image} alt={item.id} style={{ maxHeight: '150px',
  maxWidth: '160px'}}/>
            </div>
            {/* <div className='card-content'> */}
            <p>{item.types[0]}{ " " }{item.types[1]}</p>

            {/* </div> */}
            
            </a>
        </div>
     </div>
);

export default PokemanCard;