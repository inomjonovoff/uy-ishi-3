// function salom1() {
//   console.log("Salom 1");
// }
// salom1();

// const salom2 = function () {
//   console.log("Salom 2");
// };
// salom2();

// const salom3 = () => {
//   console.log("Salom");
// };
// salom3();

// function qosh(a, b) {
//   return a + b;
// }
// console.log(qosh(4, 23));

// const kopaytir = (a, b) => a * b;
// console.log(kopaytir(3, 6));

// const user = {
//   name: "Ali",
//   age: 23,
// };
// console.log(user.name);
// console.log(user["age"]);

// const user = {
//   name: "Ali",
//   salom: function () {
//     console.log("Salom " + this.name);
//   },
// };
// user.salom();

// let global = "global";

// function tashqi() {
//   let tashqiVar = "tashqi";
//   function ichki() {
//     let ichkiVar = "ichki";
//     console.log(global);
//     console.log(tashqiVar);
//     console.log(ichkiVar);
//   }
//   ichki();
// }
// tashqi();

// "use strict";
// function test() {
//   console.log(this);
// }
// test();

// function test() {
//   console.log(this);
// }
// test();

// function salom(){
//     console.log(this);

// }

// salom();

// const obj = { salom: salom};
// obj.salom();

// function Person(name){
//     this.name = name;

// }
// const p = new Person("Ali");
// console.log(p.name);

// salom.call({name: "Ali"});
// salom.apply({name: "Vali"});
// const bound = salom.bind({ name: "Hasan"});
// bound();

// function tanishtir(yosh) {
//   console.log(this.name + ", " + yosh + "yoshda");
// }
// const user = { name: "Ali" };
// tanishtir.call(user, 25);
// tanishtir.apply(user, [12]);
// const f = tanishtir.bind(user, 27);
// f();

// const user = {
//   name: "Ali",
//   salom: function () {
//     const ichki = () => {
//       console.log(this.name);
//     };
//     ichki();
//   },
// };
// user.salom();

// const mashina = {
//   brand: "Toyota",
//   model: "Corolla",
//   yil: 2009,
//   info: function () {
//     console.log(this.brand + ", " + this.model + " , " + this.yil);
//   },
// };
// mashina.info();

// const user = {
//   name: "Ali",
//   salom: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 2000);
//   },
// };
// user.salom();

// const user2 = {
//   name: "Vali",
//   salom: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 2000);
//   },
// };

const user = {
  name: "Ali",
  salom: function () {
    const self = this;
    setTimeout(function () {
      console.log(self.name);
    }, 2000);
  },
};
