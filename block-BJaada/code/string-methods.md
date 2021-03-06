Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
    - Parameter: None
    - Return: an Uppercase String
    - Example:
    ```js
    let name = 'Ishau';
    name.toUpperCase(); //ISHAU
    let gender = 'gender';
    gender.toUpperCase(); // GENDER
    let str= 'String';
    str.toUpperCase();//STRING
    ```
    - `toUpperCase`  converts a string to uppercase
3. `toLowerCase`
    - Parameter: None
    - Return: an lowercase String
    - Example:
    ```js
    let name = 'Ishau';
    name.toLowerCase(); //ishau
    let gender = 'gender';
    gender.toUpperCase(); // gender
    let str= 'String';
    str.toUpperCase(); //string
    ```
    - `toUpperCase`  converts a string to uppercase
4. `trim`
    - Parameter: None
    - Return: String removed whitespace from both ends
    - Example:
    ```js
    let name = 'Ishau ';
    name.trim(); //"Ishau"
    let gender = '   gender';
    gender.trim(); // "gneder"
    let str= 'String .  ';
    str.trim();//"String ."
    ```
    - `trim` returns a string without whitespaces
5. `trimEnd`
   - Parameter: None
    - Return: String removed whitespace from the back
    - Example:
    ```js
    let name = ' Ishau ';
    name.trimEnd(); //" Ishau"
    let gender = '   gender';
    gender.trimEnd(); // "   gender"
    let str= ' String';
    str.trimEnd();//" String"
    ```
    - `trim` returns a string removing  whitespaces from the back
6. `trimStart`
    - Parameter: None
    - Return: String removed whitespace from  front 
    - Example:
    ```js
    let name = ' Ishau ';
    name.trimStart(); //"Ishau "
    let gender = '   gender';
    gender.trimStart(); // "gender"
    let str= ' String';
    str.trimStart();//"String"
    ```
    - `trim` returns a string removing  whitespaces from the front
7. `concat`
    - Parameter: String
    - Return: String by adding one or more strings
    - Example:
    ```js
    let name = 'Ishau';
    let last = 'oyeti'
    name.concat(last); //"Ishauoyeti"
    let genderOne = 'male';
    let genderTwo = 'female';
    genderOne.concat(genderTwo); // "malefemale"
    let str1= 'ali';
    let str2= 'baba';
    str1.concat(str2);//"alibaba"
    ```
    - `concat` returns a string from concatenation of one or more strings
8. `endsWith`
    - Parameter: String
    - Return: boolean(true or false)
    - Example:
    ```js
    let name = 'Ishau';
    name.endsWith("u"); //true
    let genderOne = 'male';
    genderOne.endsWith("a")//false
    let str1= 'ali';
    str1.endsWith("i");//true
    ```
    - `endsWith()` returns a boolean
9. `includes`
    - Parameter: String
    - Return: boolean(true or false)
    - Example:
    ```js
    let name = 'Ishau';
    name.includes("u"); //true
    let genderOne = 'male';
    genderOne.includes("a")//true
    let str1= 'ali';
    str1.includes("i");//true
    ```
    - `includes()` returns a boolean if the parameter is in the string
10. `indexOf`
    - Parameter: String
    - Return: number
    - Example:
    ```js
    let name = 'Ishau';
    name.indexOf("u"); //index of u(4)
    let genderOne = 'male';
    genderOne.indexOf("a")//index of a(1)
    let str1= 'ali';
    str1.indexOf("i");//2
    ```
    - `indexOf()` returns a number which is the index of the parameter
11. `lastIndexOf`
    - Parameter: String
    - Return: method returns the position of the last occurrence of a specified value in a string
    - Example:
    ```js
    let name = 'Ishau is a ishau';
    name.lastIndexOf("u"); //index of u(15)
    let genderOne = 'male is a gender';
    genderOne.lastIndexOf("a")//index of a(8)
    let str1= 'ali is a boy';
    str1.lastIndexOf("i");//2
    ```
    - `lastIndexOf()` returns last occurence of the index of the parameter
12. `padEnd`
    - Parameter: targetLength optional string
    - Return: A String of the specified targetLength with the padString applied at the end of the current str.
    - Example:
    ```js
    'abc'.padEnd(10);          // "abc     "      
    'abc'.padEnd(10, "foo");   // "abcfoofoof"
    'abc'.padEnd(1);           // "abc"
    ```
    - `padEnd()` The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
13. `padStart`
    - Parameter: targetLength optional string
    - Return: A String of the specified targetLength with the padString applied at the start of the current str.
    - Example:
    ```js
    'abc'.padStart(10);          // "      abc"      
    'abc'.padStart(10, "foo");   // "foofoofabc"
    'abc'.padStart(1);           // "abc"
    ```
    - `padStart()` The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
14. `repeat`
    - Parameter: targetLength optional string
    - Return: The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
    - Example:
    ```js
    'abc'.repeat(1)     // 'abc'
    'abc'.repeat(2)     // 'abcabc'
    'abc'.repeat(3.5)   // 'abcabcabc' 
    ```
    - `repeat()` The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
15. `replace`
    - Parameter:  string
    - Return: replace first occurence of string
    - Example:
    ```js
    let str4="I my name is Ola";
    str4.replace("ola","tunji");     // I my name is tunji
    
    ```
    - `repeat()` A new string, with some or all matches of a pattern replaced by a replacement.
16. `slice`
    - Parameter:  string
    - Return: returns an array 
    - Example:
    ```js
   const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]nji");     // I my name is tunji
    
    ```
    - `repeat()` The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
17. `split`
    - Parameter:  string or seperator
    - Return: an array of substring
    - Example:
    ```js
    
    const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' '); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
    ```
    - `split()` 
18. `substring`

