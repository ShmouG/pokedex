import React from 'react'
import PokemanCard from './Pokeman/PokemanCard'

const Results = (props) => {
  const options = props.results.map(r => (
     <PokemanCard key={r.name} item={r} />
      
    // <li key={r.id}>
    //   {r.name}
    // </li>
  ))
  return <ul>{options}</ul>
}

export default Results;