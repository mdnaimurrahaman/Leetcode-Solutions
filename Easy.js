/*
Exercise 1
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

