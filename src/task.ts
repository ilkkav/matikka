
export type Task = {
  first: number
  second: number
  result: number
}

export type WordTask = {
  word: string
  wordWithBlanks: string
}

export const task = (): Task=> {
  const result = Math.floor(Math.random() * 11); // 0...10
  const first = Math.floor(Math.random() * (result)); // < result
  const second = result - first;
  return {first, second, result};
}

const words = [
  'perhonen',
  'prinsessa',
  'paloauto',
  'sateenkaari'
]

export const wordTask = (): WordTask => {
  const randomIndex = (): number => Math.floor(Math.random()*words.length)
  const word = words[randomIndex()]
  const blanks = [randomIndex(), randomIndex()]

  const withBlanks = [...word];
  for (let i = 0; i < blanks.length; i++) {
    withBlanks[blanks[i]] = '_'
  }
  return {word, wordWithBlanks: withBlanks.join('')}
}