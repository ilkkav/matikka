
export type Task = {
  first: number
  second: number
  result: number
}

export type WordTask = {
  letters: Letter[]
  blanks: string[]
}

type LetterStatus = 'Normal' | 'Hidden' | 'Solved'

export type Letter = {
  c: string
  status: LetterStatus
}

export const task = (): Task=> {
  const result = Math.floor(Math.random() * 11); // 0...10
  const first = Math.floor(Math.random() * (result)); // < result
  const second = result - first;
  return {first, second, result};
}

const words = [
  'PERHONEN',
  'PRINSESSA',
  'PALOAUTO',
  'SATEENKAARI'
]

const randomLessThan = (max: number) => Math.floor(Math.random()*max)

export const wordTask = (): WordTask => {
  const word = words[randomLessThan(words.length)]
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
  return {letters, blanks: blankIndices.map(i => letters[i].c)}
}