var fibonacciNumbers = require('./fibonacci-sequence')

describe('fibonacciNumbers', () => {
it ('has seed values', () => {
    // arrange
    const seedValues = [0, 1]

    // act
    const result = fibonacciNumbers(0)

    // assert 
    expect(result).toEqual(seedValues)
    })
 it ('returns fibonacci numbers to the nth number', () => {
    // arrange
    const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    const number = 10

    // act
    const result = fibonacciNumbers(number)

    // assert 
    expect(result).toEqual(sequence)
 })
})
