Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   - Parameter: it doesnot  require parameter but we can use seperator(""),(",")
   - Return: A string with all array elements joined.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(); //"1,2,3"
     let sentanceArray = '';
     sentanceArray.join(); //uncaught error
     let colors = ['red', 'green', 'blue'];
     colors.join(' '); // "redgreenblue"
     ```
   - `concat`  creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
3. `flat`
   - Parameter: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with the sub-array elements concatenated into it.
   - Example:
     ```js
     let numbers = [1, 2, 3, [3, 4]];
     numbers.flat(); //[1, 2, 3, 3, 4]
     let sentanceArray = [0, 1, 2, [[3,4]]];
     sentanceArray.flat(2); //[1, 2, 3, 3, 4]
     let colors = [0, 1, 2, [[[3,4]]]];
     colors.flat(2); // [1, 2, [3, 4]]
     ```
   - `flat`  The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
4. `push`
   - Parameter: takes elements N and add to to end of the array
   - Return: the new array with added element
   - Example:
     ```js
     let numbers = [1, 2, 3, [3, 4]];
     numbers.push(6); //[1, 2, 3, [3, 4], 6]
     let sentanceArray = [0, 1, 2, [[3,4]]];
     sentanceArray.push("Hi"); //[1, 2, [[3, 4]], "Hi"]
     let animals= [];
     animals.push('chickens', 'cats', 'dogs', 1); //['chickens', 'cats', 'dogs', 1]
     ```
   - `push`  The push() method adds one or more elements to the end of an array and returns the new length of the array.
5. `indexOf`
   - Parameter: takes element to locate in the array
   - Return: The first index of the element in the array; -1 if not found.
   - Example:
     ```js
     let numbers = [1, 2, 3, [3, 4]];
     numbers.indexOf(2); //1
     let sentanceArray = [0, 1, 2, [[3,4]]];
     sentanceArray.indexOf(0); //0
     animals= ['chickens', 'cats', 'dogs', 1];
     animals.indexOf('chickens');//0
     ```
   - `IndexOf`  The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
6. `lastIndexOf`
   - Parameter: takes element to locate last occurence of an element
   - Return: The index of the last occurrence of searchValue; -1 if not found.
   - Example:
     ```js
     let numbers = [1, 2, 3, 2, [3, 4]];
     numbers.lastIndexOf(2); //3
     let sentanceArray = [0, 1, 2, 0, [[3,4]]];
     sentanceArray.lastIndexOf(0); //3
     animals= ['chickens', 'cats', 'cats', 'dogs', 1];
     animals.indexOf('cats');//2
     ```
   - `LastIndexOf`  The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
7. `includes`
   - Parameter: The value to search for.
   - Return: true or false as appropriate.
   - Example:
     ```js
     let numbers = [1, 2, 3, 2, [3, 4]];
     numbers.includes(2); //true
     let sentanceArray = [0, 1, 2, 0, [[3,4]]];
     sentanceArray.includes(0); //true
     animals= ['chickens', 'cats', 'cats', 'dogs', 1];
     animals.includes('catss');//false
     ```
   - `includes`  The includes() method determines whether an array includes a certain value among its entries
8. `reverse`
   - Parameter: takes no parameter
   - Return: reverese array
   - Example:
     ```js
     let numbers = [1, 2,  [3, 4]];
     numbers.reverse(); //[[3,4], 1, 2]
    
     animals= ['chickens', 'cats'];
     animals.reverse();//['cat','chickens'];
     ```
   - `reverse` The reverse() method reverses an array 
9. `every`
   - Parameter: callback function
   - Return: boolean
   - Example:
     ```js
     let num = [1, 2, 3, 4];
     let iseven= (num)=>{
      
       return num%2==0;
     }
     num.every(iseven); // false
    
     let num = [4, 2, 8, 4];
     let iseven= (num)=>{
      
       return num%2==0;
     }
     num.every(iseven); // true
     ```
   - `every` The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
10. `shift`
   - Parameter: callback function
   - Return: boolean
   - Example:
     ```js
     let num = [1, 2, 3, 4];
     let iseven= (num)=>{
      
       return num%2==0;
     }
     num.every(iseven); // false
    
     let num = [4, 2, 8, 4];
     let iseven= (num)=>{
      
       return num%2==0;
     }
     num.every(iseven); // true
     ```
   - `every` The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 

11. `splice`
   - Parameter: index at which to start the array
   - Return: An array containing the deleted elements.
   - Example:
     ```js
     let num = [1, 2, 3, 4];
    
     num.splice(2); // [1,2]
    
     let num = [4, 2, 8, 4];
    
     num.splice(1,1); // [2,8,4]
     ```
   - `splice`  changes the contents of an array by removing or replacing existing elements and/or adding new elements 
12. `find`
   - Parameter: callback
   - Return: The value of the first element in the array that satisfies the provided testing function.
   - Example:
     ```js
     let num = [1, 2, 3, 4];
     let even= (num)=>{
       return num%2==0
     }
     num.find(even); // 2
    
     let num = [4, 2, 8, 4];
     let even= (num)=>{
       return num%2==0
     }
     num.find(even); //4
     ```
   - `find`  The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
13. `unshift`
   - Parameter: The elements to add to the front of the arr
   - Return: The new length property of the object upon which the method was called.
   - Example:
     ```js
     let num = [1, 2, 3, 4];
     num.unshift(1); // [1, 1, 2, 3, 4]
    
     let num = [4, 2, 8, 4];
     num.unshift(2); //[2, 4, 2, 8, 4]
     ```
   - `unshift`  The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
14. `findIndex`
   - Parameter: callback
   - Return: The index of the first element in the array that passes the test. Otherwise, -1.
   - Example:
     ```js
    const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
     ```
   - `findIndex`  The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
15. `filter` 
   - Parameter: callback
   - Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
   - Example:
     ```js
   const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
     ```
   - `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
16. `flat`
17. `forEach`
   - Parameter: callback
   - Return: undefined.
   - Example:
     ```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
     ```
   - `forEach()` method executes a provided function once for each array element.
18. `map`
   - Parameter: callback
   - Return: A new array with each element being the result of the callback function.
   - Example:
     ```js
    const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
     ```
   - `map` method creates a new array populated with the results of calling a provided function on every element in the calling array
19. `pop`
   - Parameter: non required
   - Return: array of the remaining elements
   - Example:
     ```js
    const array1 = [1, 4, 9, 16];
    array1.pop(1);
     ```
   - `pop` removed last element in array
20. `reduce`
   - Parameter: callback
   - Return: The single value that results from the reduction.
   - Example:
     ```js
    const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
     ```
   - `pop` removed last element in array
21. `slice`
   - Parameter: index at which to start the array
   - Return: An array containing the deleted elements.
   - Example:
     ```js
     const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

     ```
   - `slice()` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
22. `some`
  - Parameter: item to be found
   - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
   - Example:
     ```js
    const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
     ```
   - `some()` method tests whether at least one element in the array passes the test implemented by the provided function.
