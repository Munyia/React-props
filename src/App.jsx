import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Player';
import PlayerList from './PlayerList';
function App() {

  return (
    <div id='play'>
     <PlayerList/>
     <Player/>
    </div>
  )
}

export default App
