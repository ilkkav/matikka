
import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { task, wordTask } from './task';
import { TaskPage } from './TaskPage';
import pirateShip from './pirate_ship.jpg';
import belle from './belle.png';
import carriage from './carriage.png';
import { WordTaskPage } from './WordTaskPage';

const getImage = (count: number) => count % 2 === 0 ? carriage : belle;

function App() {

  const handleTaskDone = (done: boolean) => {
    setCurrentTaskDone(done);
    setDoneCount(doneCount + 1);
  }

  const [currentTaskDone, setCurrentTaskDone] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  return (
    <div className="App">
      <div className="header flex-item color-2">LYYTIN LASKUPELI</div>
      {currentTaskDone ?
        <img className="flex-item color-2 responsive-image" src={getImage(doneCount)} onClick={() => {
          setCurrentTaskDone(false);
        }
        }></img>
        :
        <TaskPage input={task()} setDone={handleTaskDone} />
      }

      <WordTaskPage input={wordTask()} setDone={handleTaskDone} />
      <div className="flex-container narrow">
        <button className="flex-item button" value="valmis" onClick={() => {

        }} >
          Vaihda peli
        </button>
      </div>
    </div>
  );
}

export default App;
