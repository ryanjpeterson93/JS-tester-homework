export const originalArray = (arr) => {
  return arr
}

// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME
// ways to export
// export const methodName = (param) => {
// }
// ----or---------
// export methodName function(param){
// }
let numberArray = [1,2,3,4]
// ARRAY ITERATOR METHODS

// return array with double values in array
// doubleArray(numberArray) // => [2,4,6,8];  hint use map 
export const doubleArray = (numberArray) => {
 return numberArray.map((num) => { 
    return num * 2 
  })
}

// return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4,6,8];  hint use filter 
export const evensOnlyArray = (numberArray) => {
  return numberArray.filter((num) => { 
    return num % 2 ===0
  })
}
// // return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce
export const arraySum = (numberArray) => {
  return numberArray.reduce((a, b)=>{
    return a + b
  }, 0)
}

// // return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray) // => true; use every
export const allNumbersGreaterThanZero = (numberArray) => {
  return numberArray.every(function (e) {
    return e > 0;
  });
}

// // return true if some item greater than 0
// someNumbersAreOdd(numberArray) // => true; use some
export const someNumbersAreOdd = (numberArray) => {
  return numberArray.some((a)=>{
    return a % 2 !== 0
  })
 }

// // return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter
export const evensOnlyAndDoubleArray = (numberArray) => {
  var jamessux = evensOnlyArray(numberArray) 
    return doubleArray(jamessux)
}

// // find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1
export const findItem = (numberArray, searchItem) => {
  if ((numberArray.find(a => a === searchItem))) {
    return searchItem
  } else { 
    return 'not found'
  }
}

// sortArray(numberArray) //=> [4,3,2,1] *desc*
export const sortArray = (numberArray) => {
  var sorted = numberArray.sort()
    return sorted.reverse()
}

// // -----------------------
// // BONUS STUFF DOWN THERE
// // -----------------------
// artists = [
//   {name: 'a', likes:100},
//   {name: 'c', likes:99},
//   {name: 'c', likes:101}, 
// ]
// // ARRAY ITERATOR METHODS ON Objects with name age 
// // doubles likes of artist
// doubleLikes(artists)
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'c', likes:198},
// //   {name: 'c', likes:202},  
// // ]; 
// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter
// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter
// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes
// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}
// // returns array of artist sorted by likes
// sortArtistByName(artists)