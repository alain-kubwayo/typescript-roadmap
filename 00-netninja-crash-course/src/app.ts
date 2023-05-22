const character = 'luigi';
// console.log(character)
const inputs = document.querySelectorAll("input");
// console.log(inputs);

// inputs.forEach(input => console.log(input));

// Type Basics

let age = 30;
age = 40;
let isBlackBelt = false;
// console.log(age, isBlackBelt)

const getCircumference = (diameter: number) => diameter * Math.PI;
// console.log(getCircumference(17));

// arrays
let names = ['alain', 'james'];
names.push('john');
// names.push(21); // will throw an error
// names[0] = 12; // throws an error

let numbers = [1, 2, 4, 10];
numbers.push(40);
// numbers.push('h'); // throws an error

let mixed = ['ken', 4, 'chun-li', 9];
mixed.push('ryu');
mixed.push(38);
mixed[0] = 123

// console.log(mixed);

// objects

let ninja = {
    name: 'james',
    belt: 'black',
    age: 32
}

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // error
// ninja.skills = ['fighting', 'sneaking']; // can't add additional properties after definition

ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
}

// explicit types
let char: string;
let yearOfPublication: number;
let isLoggedIn: boolean;

yearOfPublication = 2010;
// isLoggedIn = 34; // won't work
isLoggedIn = false;

// arrays
let ninjas: string[] = [];
ninjas.push('hello');

// union types
let mixedArray: (string | number | boolean )[] = [];
mixedArray.push('hello');
mixedArray.push(23);
mixedArray.push(false);
console.log(mixedArray);

let uid: string|number;
uid = 123;
uid = '123';
// console.log(uid);

// objects
let ninjaOne: object;
ninjaOne = {
    name: 'yoshi',
    age: 30
}

let ninjaTwo: {
    name: string;
    age: number;
    beltColor: string;
};

ninjaTwo = {
    name: 'mario',
    age: 27,
    beltColor: 'black',
}

// any type

let year: any = 2012;
year = true;
year = 'hello world'
year = { name: 'terry' };
// console.log(year);

let mixedArr: any[] = [];
mixedArr.push('hello');
mixedArr.push(23);
mixedArr.push(true);
mixedArr.push(['hello', 'world']);
// console.log(mixedArr);

let ninjaObj: {
    name: any;
    age: any;
};

ninjaObj = { name: 12, age: 'tomas' };
ninjaObj = { name: 'tomas' , age: 12 };

// console.log(ninjaObj);

