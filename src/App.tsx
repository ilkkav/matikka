
import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { task, wordTask } from './task';
import { TaskPage } from './TaskPage';
import pirateShip from './pirate_ship.jpg';
import princesses from './princesses.jpg';
import butterfly from './butterfly.jpg'
import carriage from './carriage.png';
import { WordTaskPage } from './WordTaskPage';

const getImage = (count: number) => count % 2 === 0 ? butterfly : princesses;

function App() {

  const handleTaskDone = (done: boolean) => {
    setCurrentTaskDone(done);
    setDoneCount(doneCount + 1);
  }

  const [currentTaskDone, setCurrentTaskDone] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  return (
    <div className="App">
      <div className="header flex-item alizarin">LYYTIN LASKUPELI</div>
      {currentTaskDone ?
        <img className="flex-item color-2 responsive-image" src={getImage(doneCount)} onClick={() => {
          setCurrentTaskDone(false);
        }
        }></img>
        :
        <WordTaskPage input={wordTask()} setDone={handleTaskDone} />
        
      }
      {false && <TaskPage input={task()} setDone={handleTaskDone} />}
      {false && <div className="flex-container narrow">
        <button className="flex-item button" value="valmis" onClick={() => {

        }} >
          Vaihda peli
        </button>
      </div>
      }
    </div>
  );
}

export default App;
