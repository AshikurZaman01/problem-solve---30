// write a arrow function where it will do the following : 
// (a) it will take two array inputs
// (b) combine the two arrays and assign them in a new array 
// (b) find the maximum number from the new array and return the result.


const arr1 = [4,5 , 1, 4,5,6,3,2,4,5,7,8,9];
const arr2 = [200,5,6,44,6,64,21,78,98];

function findMaxNumber(arr1 , arr2)
{
    const combineArray = [...arr1 , ...arr2];
    const findMax = Math.max(...combineArray);
    return findMax;
}



console.log(findMaxNumber(arr1 , arr2));

