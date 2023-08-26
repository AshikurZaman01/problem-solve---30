// write a arrow function where it will do the following : 
// (a) It will take an array where the array elements will be the name of our friends.  
// (b) check if the length of each element is even , push elements with even length to a new array and return the result.

const friends = ['karim' , 'lokman', 'milon' , 'jara' , 'maria' , 'hilon', 'pera'];
const evenLengthFriends = [];


const len = friends.filter(x => x.length % 2 == 0);
const frNames = len.map(x => evenLengthFriends.push(x));


console.log(evenLengthFriends)