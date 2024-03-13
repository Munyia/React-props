import React from 'react'

const Player = ({image, name="player name", age=20, team="player Team", nationality, jnumber}) => {
  return (
    <div> 
  <div style={{ width: '18rem',border:'1px solid black' }}>
  <img variant="top" src={image} style={{ width: '100%' }} />
      <div>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <p>{team}</p>
      <p>{nationality}</p>
      <p>{jnumber}</p>
      </div>
    </div>
  </div>
  )
}

export default Player