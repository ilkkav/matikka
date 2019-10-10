
import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { task, getWordTasks, WordTask } from './task';
import { TaskPage } from './TaskPage';
import { WordTaskPage } from './WordTaskPage';

const wordTasks: WordTask[] = getWordTasks()

function App() {

  const handleTaskDone = (done: boolean) => {
    setDoneCount(doneCount + 1);
    setCurrentTaskDone(done);
  }

  const [currentTaskDone, setCurrentTaskDone] = useState(false);
  const [doneCount, setDoneCount] = useState(0);
  const [wordGameSelected, setWordGameSelected] = useState<boolean>(true);

  return (
    <div className="App">
      <div className="header flex-item alizarin">LYYTIN LASKUPELI</div>
      {currentTaskDone ?
        <img className="flex-item color-2 responsive-image" src={wordTasks[doneCount - 1].image} onClick={() => {
          setCurrentTaskDone(false);
        }
        }></img>
        :
        wordGameSelected ? <WordTaskPage input={wordTasks[doneCount]} setDone={handleTaskDone} />
          : <TaskPage input={task()} setDone={handleTaskDone} />
      }
      <div className="flex-container narrow">
        <button className="flex-item button" value="valmis" onClick={() => {
          setWordGameSelected(!wordGameSelected)
          setCurrentTaskDone(false)
        }} >
          Vaihda peli
        </button>
      </div>
    </div>
  );
}

export default App;
