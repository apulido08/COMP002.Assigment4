// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function range(start, end){
        let count = [];
        for(let i = start; i <= end; i++){
            count.push(i);
        }
        return count
    }
    console.log(range(1, 10)); // Outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55
    function sum(number){
        let total = 0;
        for(let value of number){
            total += value;
        }
        return total;
    }
    console.log(sum(range(1, 10))); // outputs 55


// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

function reverseArray(array) {
    let results= [];
    for(let i = array.length - 1; i >= 0; i--){
        results.push(array[i]);
    }
    return results;
    }


    function reverseArrayInPlace(array){
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
            let old = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = old;
          }
          return array;
        } 
     
    console.log(reverseArray(["A", "B", "C"]));  // Outputs ["C", "B", "A"]
    
    let arrayValue =[1,2,3,4,5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);  // Outputs [5, 4, 3, 2, 1]