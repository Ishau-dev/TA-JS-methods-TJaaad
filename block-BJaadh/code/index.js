// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9)
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");
// - Remove the first word in the array (strings)
strings.shift()
// - Find all the words that contain 'is' use string method 'includes'
for(str of strings){
if(str.includes("is")){
  console.log(str)
}
}
// - Find all the words that contain 'is' use string method 'indexOf'
for(str of strings){
  if(str.indexOf("is")!==-1){
    console.log(str)
  }
  }
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(num=>{return num%3==0;});
// -  Sort Array from smallest to largest
numbers.sort(a,b=>{a-b})
// - Remove the last word in strings
strings.pop()
// - Find largest number in numbers
let max=numbers[0];
for(let i=1;i<numbers.length;i++){
  if(numbers[i]>max);{
  max=numbers[i]}
}
console.log(max);
// - Find longest string in strings
let maxStr= strings[0].length;
for(let i=1;i<strings.length;i++){
  if(strings[i].length>maxStr);{
  maxStr=strings[i].length}
}
console.log(maxStr);
// - Find all the even numbers
numbers.forEach((num)=>{ if(num%2==0){console.log(num)}})
// - Find all the odd numbers
numbers.forEach((num)=>{ if(num%2!==0){console.log(num)}})
// - Place a new word at the start of the array use (unshift)
strings.unshift("hello")
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7)
// - Make a subset of strings array ['a','collection']
strings.slice(2,4)
// - Replace 12 & 18 with 1221 and 1881
let num=numbers.join(' ')
num.replace(12,1221);
num.replace(18,1881)
// - Replace words in strings array with the length of the word
let str=strings.join()
for(i=0;i<str.length;i++){
  str.replace(str[i],str[i].length)
}
// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

for(cus of customers){
  let final=cus.firstname;
  if(final.startsWith('J')){
    console.log(final);
  }
}
// - Create new array with only first name
for(cus of customers){
  let final=[]
  let final=cus.firstname.push();
    console.log(final);
  }
// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
