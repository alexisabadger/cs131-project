// Alex McIntire

// Optimizing the Benjamin Moore Paints API to Improve Lookup Time

// In this project, I take the Benjamin Moore Paints API, take it apart,
// and re-key the nested objects so that when you're searching for a color,
// it's able to go from O(n) in the original API to O(log n) in the new API.
// (I then use binary search with a static index variable to show how much more
// efficient the new color lookup actually is.) E.g. ~ 8 searches to find 'EFEEE5'('Dove White')

// I chose each paint color's hex code to use as they key because it's
// guaranteed to be both a.) unique, and b.) descriptive of the color it represents.

////////////////////////////////////////////////////////////////////////////////////

// import filesystem to write new API to a JSON file
const FileSystem = require('fs');

// import the API that needs to be optimized
const BMcolors = require('./BMcolors.json');

// test - API is importing correctly?
// console.log(BMcolors);
//for (key in BMcolors) {
  //  console.log(`${key}: ${BMcolors[key].name} - ${BMcolors[key].hex}`);
//}

// create new (destination) API object
let newBMcolors = {};

// iterate through the original object and assigned nested objects
// to the new object
Object.keys(BMcolors).forEach(el => { 
    Object.assign(newBMcolors, {[BMcolors[el].hex]: BMcolors[el]});
});

// test the new API object
// console.log(newBMcolors);

// stringify and write to a JSON file
const colorData = JSON.stringify(newBMcolors);

FileSystem.writeFile('updatedBMcolorsAPI.json', colorData, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('New API written to file.');
    }
});


// testing and searching:

// // create arrays for testing purposes
// const colorArray = Object.entries(newBMcolors);
// const colorKeys = Object.keys(newBMcolors);

// // how many colors in the API?
// // console.log(`There are ${colorArray.length} colors in the Benjamin Moore API.`);

// // finding hexadecimal values with binary search
// let staticIndexVar = 0;


// binary search to find color in the API - O(log n)

// let recursiveBiSearch = function (arr, x, start, end) {
//     // increment static index variable every time the function is called
//     staticIndexVar++;

//     // base case
//     if (start > end) return false;

//     // find the middle index
//     let mid = Math.floor((start + end) / 2);
//     console.log("mid: " + mid);

//     // compare the middle value with the given key x
//     if (arr[mid] === x) {
//         colorIndex = mid;
//         return true;
//     }

//     // if the element at the midpoint is greater than x,
//     // search in the left half of the array
//     if (arr[mid] > x) {
//         return recursiveBiSearch(arr, x, start, mid-1);
//     } else {
//         // if the element at the midpoint is less than x,
//         // search in the right half of the array
//         return recursiveBiSearch(arr, x, mid+1, end);
//     }
// }

// // give a sample value for x
// // Benjamin Moore 'Dove White'
// let x = 'EFEEE5';

// // value if x is not found
// let colorIndex = -1;

// if (recursiveBiSearch(colorKeys, x, 0, colorKeys.length - 1)) {
//     console.log(`The hexadecimal value ${x} was found in the Benjamin Moore API at index ${colorIndex}`);
// } else {
//     console.log('That color was not found in the Benjamin Moore API.');
// }

// // test our findings
// console.log(colorArray[colorIndex]);
// console.log('\nRecursive binary search ran ' + staticIndexVar + ' times.');

// no need to use binary search, because...
// objects in JavaScript are stored as hash tables
// lookups on hash tables are O(1)
console.log(newBMcolors.hasOwnProperty('EFEEE5'));
console.log(newBMcolors['EFEEE5']);
