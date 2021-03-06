import butterfly from './images/butterfly.jpg'
import pirateShip from './images/pirate_ship.jpg';
import pirate from './images/pirate.png';
import princesses from './images/princesses.jpg';
import carriage from './images/carriage.png';
import fireEngine from './images/fire_engine.jpg';
import penguin from './images/penguin.jpg';
import unicorn from './images/unicorn.jpg';
import castle from './images/castle.jpg';
import rainbow from './images/rainbow.jpg';
import necklace from './images/necklace.jpg';
import bracelet from './images/bracelet.jpg';

export type Task = {
  first: number
  second: number
  result: number
}

export type WordTask = {
  letters: Letter[]
  blanks: string[]
  image: any
  guessLetters: string[]
}

type LetterStatus = 'Normal' | 'Hidden' | 'Solved'

export type Letter = {
  c: string
  status: LetterStatus
}

const wordsAndImages: Record<string, any> = {
  PERHONEN: butterfly,
  PRINSESSA: princesses,
  RANNEKORU: bracelet,
  KAULAKORU: necklace,
  PALOAUTO: fireEngine,
  KÄRRYT: carriage,
  MERIROSVOLAIVA: pirateShip,
  MERIROSVO: pirate,
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

const twoRandomLessThan = (max: number): [number, number] => {
  const firstRandom = randomLessThan(max)
  let secondRandom = firstRandom
  while (firstRandom === secondRandom) {
    secondRandom = randomLessThan(max)
  }
  return [firstRandom, secondRandom]
}

const wordTask = (word: string): WordTask => {
  const randomNumbers = twoRandomLessThan(word.length)
  const blankIndices = randomNumbers.sort((a: number, b: number) => a-b)
  const letters: Letter[] = [...word].map(c => ({c, status: 'Normal'}))
  blankIndices.forEach(i => {letters[i].status = 'Hidden'})
  const blanks = blankIndices.map(i => letters[i].c)
  return {letters, blanks, image: wordsAndImages[word], guessLetters: randomLettersIncluding(blanks)}
}

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö']

const randomLetter = () => letters[randomLessThan(letters.length)]

const randomLetterExcluding = (toExclude: string[]) => {
  let candidate = randomLetter()
  while(toExclude.includes(candidate)) {
    candidate = randomLetter()
  }
  return candidate
}

const randomLettersIncluding = (toInclude: string[]) => {
  const letterCount = 8
  const result: string[] = []
  for (let i = 0; i < letterCount; i++) {
    result.push(randomLetterExcluding([...result, ...toInclude])) //no duplicates.
  }
  
  const [firstIndex, secondIndex] = twoRandomLessThan(letterCount)
  result[firstIndex] = toInclude[0]
  result[secondIndex] = toInclude[1]
  return result
}