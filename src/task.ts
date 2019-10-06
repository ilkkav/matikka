
export type Task = {
  first: number
  second: number
  result: number
}

export type WordTask = {
  word: string
  wordWithBlanks: string
  blanks: string
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

export const wordTask = (): WordTask => {
  const randomIndex = (): number => Math.floor(Math.random()*words.length)
  const word = words[randomIndex()]
  const firstRandom = randomIndex()
  let secondRandom
  while (true) {
    secondRandom = randomIndex()
    if (secondRandom !== firstRandom) {
      break;
    }
  }
  const blankIndices = [firstRandom, secondRandom].sort((a: number, b: number) => a-b)

  const withBlanks = [...word];
  var blanks = '';
  for (let i = 0; i < blankIndices.length; i++) { 
    const letterAtI = word[blankIndices[i]]
    blanks = blanks + letterAtI
    withBlanks[blankIndices[i]] = '_'
  }
  console.log('blanks', blanks)
  return {word, wordWithBlanks: withBlanks.join(''), blanks}
}