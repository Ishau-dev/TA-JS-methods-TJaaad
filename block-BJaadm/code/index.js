let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName= persons.map(persons=>{ return persons.name})

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade= persons.map(persons=>{return persons.grade})
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex= persons.map(persons=>{return persons.sex})
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
peopleName.filter(peo => peo.startsWith("J"));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopleName.filter(peo=> {if(peo.startsWith('A') || peo.startsWith('C')){
  console.log(peo);
} })
// Log all the filtered male ('M') in persons array
let mSex= peopleSex.filter(peo => {if(peo == 'M'){
  return true
}});
// Log all the filtered female ('F') in persons array
let mSex= peopleSex.filter(peo => {if(peo == 'F'){
  return true
}});
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let mSexCorJ= persons.filter(peo => {if(peo.sex == 'F' && peo.name.startsWith('C') && peo.name.startsWith('J') ){
  return true
}});
// Log all the even numbers from peopleGrade array
let personGrade= persons.map(peo => {return peo.grade});
let evenPeopleGrade= personGrade.filter(peo => {if(peo%2==0){return true}}).

// Find the first name that starts with 'J' in persons array and log the object
let startsJ= persons.filter(nam => {
  return nam.name.startsWith('J');
  
});
startsJ[0];
// Find the first name that starts with 'P' in persons array and log the object
let startsP= persons.filter(nam => {
  return nam.name.startsWith('P');
  
});
startsP[0];
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let startsJ= persons.filter(nam => {
  if(nam.name.startsWith('J') && nam.grade > 10 && nam.sex=='F'){
    return true
  };
  
});
// Filter all the female from persons array and store in femalePersons array
let femalePersons=persons.filter(peo => { if(peo.sex=='F'){return true}})
// Filter all the male from persons array and store in malePersons array
let malePersons=persons.filter(peo => { if(peo.sex=='M'){return true}})
// Find the sum of all grades and store in gradeTotal

let gradeTotal= peopleGrade.reduce((acc,val)=>{return acc+=val},0)
// Find the average grade
let averageGrade= peopleGrade.reduce((acc,val)=>{return acc+=val},0)/peopleGrade.length
// Find the average grade of male
let maleGrade= malePersons.map(peo => {
  
  return peo.grade})
  let avgmaleGrade= maleGrade.reduce((acc,val)=>{return acc+=val},0)/maleGrade.length

// Find the average grade of female
let femaleGrade= femalePersons.map(peo => {
  
  return peo.grade})
  let avgfemaleGrade= femaleGrade.reduce((acc,val)=>{return acc+=val},0)/femaleGrade.length

// Find the highest grade
let hGrade= [...peopleGrade].sort((a,b)=> a -b).pop()
// Find the highest grade in male
let hMaleg=[...maleGrade].sort((a,b) => { return a - b }).pop()
// Find the highest grade in female
let hFemaleg=[...femaleGrade].sort((a,b) => { return a - b }).pop()
// Find the highest grade for people whose name starts with 'J' or 'P'
let startsJorP= persons.filter(nam => {
   if(nam.name.startsWith('P') || nam.name.startsWith('J')){
    return true
  };
  
});
let jorpGrade= startsJorP.map(peo => peo.grade);
[...jorpGrade].sort((a,b) => a - b).pop()
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b)=> a - b)
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b)=> b - a)
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let xx=[...peopleGrade].sort((a,b)=> b - a)
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort()
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let xr=[...peopleName].sort()