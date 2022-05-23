// MCINTIRE
// CS 131 - Discrete Structures
// Project: Benjamin Moore API

// In this project, I take the Benjamin Moore Paints API, take it apart,
// and re-key the nested objects so that when you're searching for a color,
// it's able to go from O(n) in the original API to O(log n) in the new API.
// (I then use binary search with a static index variable to show how much more
// efficient the new color lookup actually is.) E.g. ~ 8 searches to find 'EFEEE5'('Dove White')

// I chose each paint color's hex code to use as they key because it's
// guaranteed to be both a.) unique, and b.) descriptive of the color it represents.

////////////////////////////////////////////////////////////////////////////////////

// required to write new API to a JSON file
const FileSystem = require('fs');

// import API that needs to be re-keyed
const BMcolors = require('./BMcolors.json');

// test - API is importing correctly
// console.log(BMcolors);
// console.log(typeof(BMcolors));

// test - get 1st level of property names
// console.log(Object.getOwnPropertyNames(BMcolors));
//for (key in BMcolors) {
    //key = BMcolors[key].hex;
  //  console.log(`${key}: ${BMcolors[key].name} - ${BMcolors[key].hex}`);
//}

// create new object (destination object)
var newBMcolors = {};

// loop through each key in the original object to add to new object
    // destination: newBMcolors
    // key: each original object's hex value
    // value: each original object's original value (same as before)
Object.keys(BMcolors).forEach(el => {
    // tests
    // console.log(el, BMcolors[el]);
    // console.log(BMcolors[el].hex);
    Object.assign(newBMcolors, {[BMcolors[el].hex]: BMcolors[el]});
  });

// create a JSON object with stringify
const colorData = JSON.stringify(newBMcolors);

// write the new updated API (JSON object) to a file
FileSystem.writeFile('newBMcolorAPI.json', colorData, (err) => {
    if (err) {
        console.log(err);
        }
        
        console.log('New API file saved');
});

const colorArray = Object.entries(newBMcolors);
const colorKeys = Object.keys(newBMcolors);

colorArray.sort;
console.log(colorArray[0]);
console.log(colorArray[0][0]);
console.log("There are " + colorArray.length + " colors in the new API");

console.log(colorKeys[0]);
console.log(colorKeys.includes('EFEEE5'));
//console.log(colorArray[1]);
//console.log(colorArray[2]);
//console.log(colorArray[3]);
//console.log(colorArray[4]);

// console.log(colorArray);

// test
//let testAPIcall = fetch('https://www.benjaminmoore.com/api/colors');
//console.log(testAPIcall);

// console.log(newBMcolors);
var staticIndexVar = 0;

let recursiveFunction = function (arr, x, start, end) {
    staticIndexVar++;  

    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
    console.log("mid: " + mid);
  
    // Compare mid with given key x
    if (arr[mid]===x) {
        colorIndex = mid;
        console.log("mid is: " + mid);
        return true;
    }
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}
  
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
// let x = 'EFEEE5';
let x = '169928';
let colorIndex = -1;
  
if (recursiveFunction(colorKeys, x, 0, colorKeys.length-1))
    console.log("Element found at: " + colorIndex);
else console.log("Element not found!");
  

console.log(colorArray[colorIndex]);
console.log(staticIndexVar);
//x = 6;
  
//if (recursiveFunction(arr, x, 0, arr.length-1))
  //  document.write("Element found!<br>");
//else document.write("Element not found!<br>");
