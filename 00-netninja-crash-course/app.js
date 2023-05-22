var character = 'luigi';
// console.log(character)
var inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach(input => console.log(input));
// Type Basics
var age = 30;
age = 40;
var isBlackBelt = false;
// console.log(age, isBlackBelt)
var getCircumference = function (diameter) { return diameter * Math.PI; };
// console.log(getCircumference(17));
// arrays
var names = ['alain', 'james'];
names.push('john');
// names.push(21); // will throw an error
// names[0] = 12; // throws an error
var numbers = [1, 2, 4, 10];
numbers.push(40);
// numbers.push('h'); // throws an error
var mixed = ['ken', 4, 'chun-li', 9];
mixed.push('ryu');
mixed.push(38);
mixed[0] = 123;
// console.log(mixed);
// objects
var ninja = {
    name: 'james',
    belt: 'black',
    age: 32
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // error
// ninja.skills = ['fighting', 'sneaking']; // can't add additional properties after definition
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
