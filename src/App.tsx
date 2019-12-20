
import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { OldGameView } from './OldGameView';

function App() {

  const oldGame = true

  return (
    <div className="App">
      {oldGame && <OldGameView/>}
    </div>
  );
}


export default App;
