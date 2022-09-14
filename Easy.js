/*
Exercise 1
Leeacode Problem
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/*
const towSum = (numbers, target) => {
    for(let i = 0; i <= numbers.length; i++){
        for(let num = i+1; num < numbers.length; num ++ ){
            if(numbers[i] + numbers[num] == target){
                return [i, num]
            }
        }
    }
}
console.log(towSum([5,4,6,7],13))
*/
/*
Exercise 2
----------
Write a javaScript program to get the current date.
Expected Output: 
mm-dd-yyyy, mm/dd/yy or dd-mm-yyyy, dd/mm/yyyy
*/
/*
//Solution:
const formatDate = (date = new Date()) => {
    const days = date.getDate(); // +1 
    const months = date.getMonth(); // +1
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}
console.log(formatDate())
*/

/*
Exercise 3
HackerRank Problem

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:
If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.

*/

/*
Solution:
let numbers = [34,38,44,68,79,77];

function gradingStudents (grades){
    let result = [];

    grades.forEach((grade) => {
        if(grade < 38){
            result.push(grade);
        } else {
            let nextMultipleOf5 = getTheNextMultiple(grade);
            let difference = Math.abs(nextMultipleOf5 - grade);
            difference <  3 
            ? result.push(nextMultipleOf5) 
            : result.push(grade);
        }
    });
    return result;
}
function getTheNextMultiple(n){
    let multiple = (Math.floor(n/5) +1) * 5;
    return multiple
}
console.log(gradingStudents(numbers))
*/

/*
Exercise 4
----------
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
/*
//Solution
function addUp(num){
    let sum = 0;
    for(let i = 1; i<= num; i+= 1){
        sum += i;
    }
    return sum;
}
*/

/* 
Exercise 5:
-----------
Write a JavaScript program to check tow numbers and return true 
if one of the number is 100 or if the sum of the tow numbers is 100.
*/

/*
Solution:
const isEqualTotal = (a, b) => a === 100 || b === 100 || (a+b) === 100;
console.log(isEqualTotal(100,0))
console.log(isEqualTotal(0,100))
console.log(isEqualTotal(50,50))
*/

/*
Exercise 6
----------
Write a javaScript program to create a new string adding "New!"
in front of a given string. If the given string begins with "New!" 
Already then return the original string.
*/
/*
//Solution:
 const addNew = (str) => str.indexOf('New!') === 0 ? str: `New! ${str}`;
 console.log(addNew('New! Offers'));
*/


/*
Exercise 7
Migratory Birds - Hacker rank problem

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example-
There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .
 */

let testarry = [2,2,2,2,4,5,5,8,9,1,5,1,8,4,5,1,2];

function migratroyBirds(arr){

    let result;
    let counterArr = [
        {type: 1, count: 0},
        {type: 2, count: 0},
        {type: 3, count: 0},
        {type: 4, count: 0},
        {type: 5, count: 0}
    ]

    for(let i = 0; i <arr.length; i++){
        switch(arr[i]){
            case 1:
                counterArr[arr[i] - 1].count++;
                break;
            case 2:
                counterArr[arr[i] - 1].count++;
                break;
            case 3:
                counterArr[arr[i] - 1].count++;
                break;
            case 4:
                counterArr[arr[i] - 1].count++;
                break;
            case 5:
                counterArr[arr[i] - 1].count++;
                break;
        }
    }
    console.log(counterArr);
    let sortedArr =counterArr.sort((a,b)=>{
        return a.count - b.count;
    });
    console.log(sortedArr)
    let maxCount = sortedArr[sortedArr.length - 1].count;
    let maxCounterArr = sortedArr.filter((x)=> {
        if(x.count == maxCount){
            return x;
        }
    })
    
    if(maxCounterArr.length == 1){
        result = maxCounterArr[0].type;
    }else{
        let lowerType = maxCounterArr.sort((a,b)=> {
           return a.type - b.type;
        });
        console.log(lowerType)
    }

    return result;
}

console.log(migratroyBirds(testarry))