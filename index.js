;



//let data ={name:"myname",age:12,area:"india"};
//let {name,age} = data;
let my = 1;
console.log(`my ${my} is`);



function myname(age = 2) {
    age  = age +12+152;
    return age;

}
console.log(myname(12));
function add(a,b) {
    let sum= a+b;
    return sum;
    
}
console.log(add(5,2));
let sub = (a,b) => {return a-b;}
let hobbies = ["playibng","watching","cricket"];
console.log(hobbies);
let [top1,top2,top3] = hobbies;
console.log(top1);

//string functions
let firstName = "yogesh";
let lastName = "sharma";
console.log(firstName+" "+lastName);
//indexof
let string  = "my name is yogesh";
let index = string.indexOf("name");
console.log(index);