;



//let data ={name:"myname",age:12,area:"india"};
//let {name,age} = data;
/*
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
*/

//rest and spread operator
/*let sum = 0;
function adding(...c) {
    for(let i of c){
        sum += i;   
    }
    return sum;
}
//adding();
//console.log(adding(1,2,3,4,5,6,7,8,9));
//class object
/*class student{
    constructor(name,age,dept){
    this.name1 = name;
    this.age1 = age;
    this.dept1 = dept ;

}
biodata(){
    console.log(`biodata method in student class.i am ${this.name1} of ${this.dept1}`);
}
}
let obj1 = new student("yogesh",21,"MCA");
obj1.biodata();
class car{
    constructor(model,colour){
 this.carmod = model;
 this.carc = colour; 
    }
carproperties(msg){
    console.log(`${msg} . car model is ${ this.carmod} and colour is ${this.carc}`);
}
}
let carobj = new car("ford","red");
carobj.carproperties("my car is");
//inheratence
class teacher extends student{
    constructor(name,age,dept,dept2){
        super(name,age,dept,dept2);
        this.teachdept = dept2;
    }
    biodata(){
        console.log(`biodata method in student class.i am ${this.name1} of ${this.dept1} in ${this.teachdept}`);
    }

}
let obj2 = new teacher("yogesh",21,"MCA","BTECH");
obj2.biodata();
//mixing
let sayHimixin = {
    sayhi(){
        console.log(`hello ${this.name}`);
    },
    saybye(){
console.log(`byee ${this.name}`);
    }

};
class person{
    constructor(name){
        this.name = name;
    }
}
/*Object.assign(person.prototype,sayHimixin);
new person("yogesh").sayhi();
obj3.sayhi();
obj3.saybye();
//call back functions
let getmyinformation =()=>{

}
/*
function sum(){
    return "xyz";
}

let sum = () => {
    setTimeout(()=>{console.log("hello")},5000);
    console.log("yogesh");
        return 'xyz';
}
sum();


let getmyinformation =()=>{
setTimeout(()=>{
    console.log("data fetched");
    let fetchid =[22,33,44,55,66];

},2000)
}

// async ans sync call back
//sync
let function2 = ()=>{
    console.log("function2 is called");
};
let function1 = () =>{
    console.log("function 1 i s started");
function2();
console.log("function1 hAS ENDED");
}
function1();
*/
//async
let function2 = ()=>{
    setTimeout(()=>{
        console.log("function2 is called");
    },3000);
   
};
let function1 = () =>{
    console.log("function 1 i s started");
function2();
console.log("function1 hAS ENDED");
}
function1();