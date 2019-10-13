
import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { task, getWordTasks, WordTask } from './task';
import { TaskPage } from './TaskPage';
import { WordTaskPage } from './WordTaskPage';

const wordTasks: WordTask[] = getWordTasks()
const maxIndex = wordTasks.length;

function App() {

  const nextTask = () => {
    setDoneCount((doneCount + 1) % maxIndex);
  }

  const [showPrize, setShowPrize] = useState(false);
  const [doneCount, setDoneCount] = useState(0);
  const [wordGameSelected, setWordGameSelected] = useState<boolean>(true);

  return (
    <div className="App">
      <div className="header flex-item alizarin">LYYTIN LASKUPELI</div>
      {showPrize ?
        <img className="flex-item color-2 responsive-image" src={wordTasks[doneCount].image} onClick={() => {
          setShowPrize(false);
          nextTask();
        }
        }></img>
        :
        wordGameSelected ? <WordTaskPage input={wordTasks[doneCount]} setDone={() => setShowPrize(true)} />
          : <TaskPage input={task()} setDone={() => setShowPrize(true)} />
      }
      <div className="flex-container narrow clouds">
        <button className="flex-item button small pomegranate hollow" value="valmis" onClick={() => {
          setWordGameSelected(!wordGameSelected)
          setShowPrize(false);
          nextTask();
        }} >
          VAIHDA PELI
        </button>
      </div>
    </div>
  );
}

export default App;
