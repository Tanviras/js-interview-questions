//Example-1
// function add(num1,num2){
//     let sum=num1+num2;
//     return sum;
// }
// const output=add(5,3);
// console.log(output);
// console.log(sum);//you can't bring "sum" out of the function because "sum" has the scope only in the inner region of the function. That's why error message is seen.







//Example-2
// function add(num1,num2){
//     let sum=num1+num2;
//     if(sum>5){
//         let mood="I am contended";//as "let" is assigned as the type, "mood" won't go beyond its scope-the if condition's curly brackets.
//     }
//     console.log(mood);//that's why "mood" won't work if it is used here. An error message will show.
// }
// const output=add(5,3);








//Example-3
function add(num1,num2){
    let sum=num1+num2;
    if(sum>5){
        var mood="I am contended";//as "var" is assigned as the type, "mood" will go beyond its scope-the if condition's curly brackets.
    }
    console.log(mood);//that's why "mood" will work if it is used here. This is called "Hoisting". Like extending the scope. Hoisting the flag.
}
const output=add(5,3);






