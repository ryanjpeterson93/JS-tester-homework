import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray
} from '../app'

describe('originalArray Tests', ()=> {
  test('originalArray should return it self', () => {
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray Tests', ()=> {
  test('doubleArray should double nums', () => {
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
  }) 
})

describe('evensOnlyArray Tests', () =>{
  test('evensOnlyArray should pull evens', ()=>{
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
  })
})

describe('arraySum tests', ()=> {
  test('arraySum should sum all nums of array', ()=>{
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
})

describe('allNumbersGreaterThanZero Test', ()=>{
  test('allNumbersGreaterThanZero finds nums > 0', ()=>{
    expect(allNumbersGreaterThanZero([1,2,3,4])).toBeTruthy()
  })
})

describe('someNumbersAreOdd Tests', ()=>{
  test('someNumbersAreOdd returns true if odd is found', ()=>{
    expect(someNumbersAreOdd([1,2,3,4])).toBeTruthy()
  })
})

describe('evensOnlyAndDoubleArray Tests', ()=>{
  test('evensOnlyAndDoubleArray finds even numbers, then doubles those evens', ()=>{
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
})

describe('findItem', ()=>{
  test('findItem returns not found', ()=>{
    expect(findItem([1,2,3,4], 'a')).toEqual('not found')
  })
  test('findItem returns searched item', ()=>{
    expect(findItem([1,2,3,4], 2)).toEqual(2)
  })
})

describe('sortArray Tests', ()=>{
  test('sort array and then reverse array', ()=>{
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1])
  })
})