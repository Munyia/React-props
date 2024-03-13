import React from 'react'
import Player from './Player'
import players from './players'

const PlayerList = () => {
  return (
    <div style={{display:"flex"}}>
        {
            players.map((indplayer) =>(
            <Player name={indplayer.name} jnumber={indplayer.jerseyNumber} nationality={indplayer.nationaliity} age={indplayer.age} team={indplayer.team} image={indplayer.image} />
            ))
        }
    </div>
  )
}

export default PlayerList