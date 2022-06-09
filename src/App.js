import React from 'react';
import './App.css';
import StartGame from './components/StartGame';
import Game from './components/Game'
import NavBar from './components/NavBar'

function App() {
  let finito = false;
  return (
    <div>
    <NavBar/>
    <div className="App">
     <Game></Game>
      
  
    </div></div>
  );
}
export default App;
