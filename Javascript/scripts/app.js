var myName = "Vaibhav Kabira"
let mySurname = "Kabira"
const wwe = "Roman Reings"
console.log(myName);
console.log(mySurname);
console.log(wwe);

//operators
console.log(`${mySurname} ${"Vaibhav"}`);
console.log(myName === mySurname);
console.log(10 / 20);
if (316 === 316) {
  console.log("HEll YEAH!");
}

function greet(Characters, gameName = 'Valorant') {
  // console.log("YO!");
  // console.log(Characters);
  // console.log(gameName);
  return "Yo what's Up Mr.Wite" + Characters + gameName;
}
const greet1 = greet("Walter")
console.log(greet1)
// greet("Omen")
// greet("SOva")
// greet("JEtt")
// greet("Pokemon")

//function just cannot take input value but they can return the values
//Function must only have one return statment at most.
//Function without return implicity return undefined

function combine(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0) {

    return "Please provide valid non numeric input"
  }
  //calculate 
  var result = (a * b) / c;
  return result
}

// example
var a = 5;
var b = 4;
var c = 4;

const combineResult = combine(a, b, c)
console.log("Combine Result:", combineResult);

//Anonaymous function
// function(){
//   console.log("Yo");
// }//tradition function 

// ()=>{
//   console.log("HEY! MR. White");
// }

//JS oBject

const user = {
  name: "Roman",
  profession: "Wrestling"
}
console.log(user);
console.log(user.profession);

//obejct stores key value pair sperated by : "key:value"
//js object can also store the function

const newUser = {
  name: "The Rock",
  profession: "Actor and Wrestler",
  //this fn inside the object is called method
  wwe() {
    console.log("Final Boss");
    console.log(this.profession);
  }
}
console.log(newUser);
newUser.wwe()

//also can access the object value by using this keyword
//this refers to the whole object 

//class keyword
//is used to create blueprint that then can leter be used to create the actual object

class User {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  //adding the methods
  cena(){
    console.log("You can't see me!");
  }
}
const user1 = new User("Manual",49);
console.log(user1);