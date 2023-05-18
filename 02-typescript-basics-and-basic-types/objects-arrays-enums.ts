// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Alain',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };



const person = {
    name: 'Alain',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin'); // push is allowed in tuple unline re-assignment
// person.role[0] = 'author';

// console.log(person.role);

if(person.role === Role.AUTHOR){
    console.log('is author');
}

let favoriteActivities: string[];
// let favoriteActivities: any[];

favoriteActivities = ['hello', 'world'];
// favoriteActivities = ['hello', 23];

console.log(person.name, person.age);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}