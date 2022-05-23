// required to write new API to a JSON file
const FileSystem = require('fs');

// require node-fetch (make sure to install it: npm install node-fetch)
// const fetch = require('node-fetch');

// import API that needs to be re-keyed
const BMcolors = require('./BMcolors.json');


// test - API is importing correctly
// console.log(BMcolors);
// console.log(typeof(BMcolors));

// get 1st level of property names
// console.log(Object.getOwnPropertyNames(BMcolors));
//for (key in BMcolors) {
    //key = BMcolors[key].hex;
  //  console.log(`${key}: ${BMcolors[key].name} - ${BMcolors[key].hex}`);
//}
var newBMcolors = {};

Object.keys(BMcolors).forEach(el => {
    // console.log(el, BMcolors[el]);
    // console.log(BMcolors[el].hex);
    Object.assign(newBMcolors, {[BMcolors[el].hex]: BMcolors[el]});
  });

const colorData = JSON.stringify(newBMcolors);
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