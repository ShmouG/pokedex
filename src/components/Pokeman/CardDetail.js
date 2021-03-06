import React from 'react';
import './PokemanCard.css';

const CardDetail = ({item}) => (
    <div className='col'>
        <div className='card'>
        <a href={item.image} target='_blank' rel="noopener noreferrer">
        <span className='card-title'>{item.name}</span>
            <div className='card-image'>
                <img src={item.image} alt={item.id} style={{ maxHeight: '150px',
  maxWidth: '160px'}}/>
            </div>
            <p>{item.types[0]}{ " " }{item.types[1]}</p>
            <div className='card-content'>
                <p>{item.height}</p>
            </div>
            
            </a>
        </div>
     </div>
);

export default CardDetail;