// var myName = "Vaibhav Kabira"
// let mySurname = "Kabira"
// const wwe = "Roman Reings"
// console.log(myName);
// console.log(mySurname);
// console.log(wwe);

// //operators
// console.log(`${mySurname} ${"Vaibhav"}`);
// console.log(myName === mySurname);
// console.log(10 / 20);
// if (316 === 316) {
//   console.log("HEll YEAH!");
// }

// function greet(Characters, gameName = 'Valorant') {
//   // console.log("YO!");
//   // console.log(Characters);
//   // console.log(gameName);
//   return "Yo what's Up Mr.Wite" + Characters + gameName;
// }
// const greet1 = greet("Walter")
// console.log(greet1)
// // greet("Omen")
// // greet("SOva")
// // greet("JEtt")
// // greet("Pokemon")

// //function just cannot take input value but they can return the values
// //Function must only have one return statment at most.
// //Function without return implicity return undefined

// function combine(a, b, c) {
//   if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0) {

//     return "Please provide valid non numeric input"
//   }
//   //calculate 
//   var result = (a * b) / c;
//   return result
// }

// // example
// var a = 5;
// var b = 4;
// var c = 4;

// const combineResult = combine(a, b, c)
// console.log("Combine Result:", combineResult);

// //Anonaymous function
// // function(){
// //   console.log("Yo");
// // }//tradition function 

// // ()=>{
// //   console.log("HEY! MR. White");
// // }

// //JS oBject

// const user = {
//   name: "Roman",
//   profession: "Wrestling"
// }
// console.log(user);
// console.log(user.profession);

// //obejct stores key value pair sperated by : "key:value"
// //js object can also store the function

// const newUser = {
//   name: "The Rock",
//   profession: "Actor and Wrestler",
//   //this fn inside the object is called method
//   wwe() {
//     console.log("Final Boss");
//     console.log(this.profession);
//   }
// }
// console.log(newUser);
// newUser.wwe()

// //also can access the object value by using this keyword
// //this refers to the whole object 

// //class keyword
// //is used to create blueprint that then can leter be used to create the actual object

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   //adding the methods
//   cena() {
//     console.log("You can't see me!");
//   }
// }
// const user1 = new User("Manual", 49);
// console.log(user1);

// //Arrays and array method like map()
// const hobbies = ['Reading', 'Writing', 'Cooking']
// console.log(hobbies[0]);

// hobbies.push("Working", "Sports");
// console.log(hobbies);

// // const index = hobbies.findIndex((item) => {
// //   return item === "Sports";
// // })
// //Shortest way and advantage of using arrow function
// const index = hobbies.findIndex((item) => item === "Sports")

// console.log(index);

// const editHobbies = hobbies.map((item) => item + "!") //=> ({key:value})
// //also can use the object in map method

// console.log(editHobbies);


// function transformToObjects(numberArray) {
//   return numberArray.map((num) => {
//     return { val: num }
//   })
// }
// console.log(transformToObjects([1, 2, 3]))

// //Destructring 
// //array
// const [firstName, lastName] = ["Vaibhav", "Kabira"]
// console.log(firstName);
// console.log(lastName);

// //object
// const { name: userName, age } = {
//   name: " Roman",
//   age: 40
// }
// console.log(userName);
// console.log(age);

// //Spread op
// // const hobbies = ["Sports","Wrestling"]
// const newHobbies = "reading"
// const mergerHobbies = [...userName, ...hobbies]
// console.log(mergerHobbies);

// //spread op in object
// const extendedUser = {
//   isAdmin: true,
//   ...user
// }
// console.log(extendedUser);

// control structure

// const password = prompt("")
// if (password === "HELLO") {
//   console.log("HELLO WORKS");
// } else if (password === "hello") {
//   console.log("HELLO lower seems");
// } else {
//   console.log("ACCESS denied");
// }

// const hobbies = ["Sports", "Wrestling"]

// for(const hobby of hobbies){
//   console.log(hobbies);
// }

// function star(num) {
//   return num = num.map((item) => {
//     return { val: item }
//   })
// }

// console.log(star(["*"]));

// Using function as values
// function handleTimeout() {
//   console.log('Times up');
// }
// const handleTimeout2 = () => {
//   console.log("Your time is up my time is now");
// }

// setTimeout(handleTimeout, 2000)
// setTimeout(handleTimeout2, 4000)
// setTimeout(() => {
//   console.log("Achnowledge me!");
// }, 5000);

// function greeter(greetfn) {
//   greetfn();
// }
// greeter(() => console.log("HI"))

//Defining functions inside the functions
// function init(){
//   function greet (){
//     console.log("HO");
//   }
//   greet()
// }
// init()

//Reference vs Primitive values
//objects in javascript are so cold reference values

// const hobbies = ["Sports","Cooking"]
// hobbies.push("KOOK")
// console.log(hobbies);