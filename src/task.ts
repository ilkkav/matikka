import butterfly from './butterfly.jpg'
import pirateShip from './pirate_ship.jpg';
import princesses from './princesses.jpg';
import carriage from './carriage.png';
import fireEngine from './fire_engine.jpg';
import penguin from './penguin.jpg';
import unicorn from './unicorn.jpg';
import castle from './castle.jpg';
import rainbow from './rainbow.jpg';

export type Task = {
  first: number
  second: number
  result: number
}

export type WordTask = {
  letters: Letter[]
  blanks: string[]
  image: any
}

type LetterStatus = 'Normal' | 'Hidden' | 'Solved'

export type Letter = {
  c: string
  status: LetterStatus
}

const wordsAndImages: Record<string, any> = {
  PERHONEN: butterfly,
  PRINSESSA: princesses,
  PALOAUTO: fireEngine,
  SATEENKAARI: rainbow,
  PINGVIINI: penguin,
  LINNA: castle,
  YKSISARVINEN: unicorn
}

export const getWordTasks = () => {
  return Object.keys(wordsAndImages).map(key => wordTask(key))
}

export const task = (): Task=> {
  const result = Math.floor(Math.random() * 11); // 0...10
  const first = Math.floor(Math.random() * (result)); // < result
  const second = result - first;
  return {first, second, result};
}

const randomLessThan = (max: number) => Math.floor(Math.random()*max)

const wordTask = (word: string): WordTask => {
  const firstRandom = randomLessThan(word.length)
  let secondRandom
  while (true) {
    secondRandom = randomLessThan(word.length)
    if (secondRandom !== firstRandom) {
      break;
    }
  }
  const blankIndices = [firstRandom, secondRandom].sort((a: number, b: number) => a-b)
  const letters: Letter[] = [...word].map(c => ({c, status: 'Normal'}))
  blankIndices.forEach(i => {letters[i].status = 'Hidden'})
  return {letters, blanks: blankIndices.map(i => letters[i].c), image: wordsAndImages[word]}
}