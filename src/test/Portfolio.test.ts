const position: string[] = ['left', 'top', 'right', 'bottom']

const randomPosition = (max: number) => {
  const randomize: number = Math.floor(Math.random() * max)
  const positionName: string = position[randomize]
  return positionName
}

test('mount component', () => {
  expect(randomPosition(4)).toMatch(/left|top|right|bottom/)
})
