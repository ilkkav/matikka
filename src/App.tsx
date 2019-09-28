
import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { task } from './task';
import { TaskPage } from './TaskPage';
import pirateShip from './pirate_ship.jpg';
import belle from './belle.png';
import carriage from './carriage.png';

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
      <div className="flex-container-3">
        <div className="flex-container row color-2">LYYTIN LASKUPELI</div>

        {currentTaskDone ?
          <div className="flex-row column">
            <img className="flex-item color-2 responsive-image" src={getImage(doneCount)} onClick={() => {
              setCurrentTaskDone(false);
            }
            }></img>
          </div>
          :
          <TaskPage input={task()} setDone={handleTaskDone} />
        }
        <p>{doneCount}</p>
      </div>
    </div>
  );
}

export default App;
