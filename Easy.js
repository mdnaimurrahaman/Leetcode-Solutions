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