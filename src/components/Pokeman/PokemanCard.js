import React from 'react';
import './PokemanCard.css';

const PokemanCard = ({item}) => (
    <div className='col'>
        <div className='card'>
        <span className='card-title'>{item.name}</span>
            <div className='card-image'>
                <img src={item.image} alt={item.id} />
            </div>
            <div className='card-content'>
            <p> Pokeman type: {item.types[0]}{ " " }{item.types[1]}</p>

            </div>
            <div className='card-action'>
                <a href={item.links} target='_blank' rel="noopener noreferrer">Pokeman Details</a>
            </div>
        </div>
    </div>
);

export default PokemanCard;