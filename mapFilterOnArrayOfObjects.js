const students = [
    {id:21 ,name:"Omar Sunny"},
    {id:31 ,name:"Manna"},
    {id:41 ,name:"Sadek Khan"},
    {id:71 ,name:"Deepjol"},
];

//Nije nije korte bolsilo,korlam for loop diye
// for(let i=0;i<students.length;i=i+1){
//     let actors= students[i];
//     let actorsName =actors.name;
//     console.log(actorsName);
// }

//Ponditi style shikaise toh, oije map diye element dhore ana.
// students.map(function(element){
//     console.log(element.name)
// })

//Arek ponditi! map+arrow function diye
const names = students.map(x =>x.name);
const  ids = students.map(x =>x.id);
console.log(ids);
console.log(names);