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

  strings.filter(ele=>{ele.includes("is")})
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
let longest= [...strings].sort((a,b) =>{a.length - b.length}).pop();
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
let numstr=strings.map(str=>{str.length});
// - Find the sum of the length of words using above question
numstr.reduce((acc,cv)=>{
  acc+=cv;
  return acc
},0)
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
let firstnameCust= customers.map(cust=> cust.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let  fullName= customers.map(cust => `${cust.firstname} ${cust.lastname}`);
// - Sort the array created above alphabetically
[...fullName].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCust= customers.filter((cust) => {
  if( cust.firstname.toLowerCase.includes("a") || cust.firstname.toLowerCase.includes("e") || cust.firstname.toLowerCase.includes("i") || cust.firstname.toLowerCase.includes("o") || cust.firstname.toLowerCase.includes("u")){
  return true;
}else {
  return false
}});