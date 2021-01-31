//Finding square
const numbers=[1,2,3,4,5,6,7,8,9];

//Method-1: function
// function square(element){
//            return element*element;
// }
//const result=square(numbers);
//console.log(result);






//Method-2: using map
// numbers.map(function(element,index,array){//"element","index","array" are  three reserved words/parameters of map
//     console.log(element,index,array);
// })

//map is something in which you can input a array function(here is "numbers") to find out their element,index & full array 




//Method-3: arrow function & map
// const result= numbers.map(x => x*x);
// console.log(result);
//Point to be noted from method 3
//Why map is used with arrow function? Couldn't we use only arrow function to find out the square? The answer is may be we could,but we haven't learnt that yet. We have learnt to take only one value at a time in arrow function. But in array,there are several values to take. So either take the values out by an index or, for loop, or, use map to take them out. As we have seen map is used to find out the elements,index or the whole array.





//Filter
//let we have to filter out some elements out of an array
//only use "filter" instead of "map" in the method-3
// const result= numbers.filter(x => x>5);
// console.log(result);



//Find=Is there any? 
//if any,then show the first of them
//only use "find" instead of "map" in the method-3
const result= numbers.find(x => x>5);
console.log(result);