//Till now, we have seen function has returned a value
//We will see that function can return a group of values like object,array
//Function can even return another function



function stopwatch(){
    let count = 0;
    return function(){//stopwatch() function is returning the new function
        count=count+1;
        return count;
    }
}

const clock1=stopwatch();//captures the return value of stopwatch() function
console.log(clock1());//value is 1
console.log(clock1());//value is 2
console.log(clock1());//value is 3
console.log(clock1());//value is 4
console.log("\n");

const clock2=stopwatch();//captures the return value of stopwatch() function
console.log(clock2());//value is 1
console.log(clock2());//value is 2
console.log(clock2());//value is 3
console.log(clock2());//value is 4
console.log("\n");

console.log(clock1());//value is 5, although clock1() is used





//Ei je function theke jodi function return deya hoy, tokhon return kora output niye alada ekta group toiri kore fela jay,jara tader nijeder rules mene cholbe. Like clock1 & clock2. Ekhon ederke jekhanei use kora hok na keno, era eder rules mene cholbei.Ei group tai eder closure.