// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'Alain',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
// let favoriteActivities: any[];

favoriteActivities = ['hello', 'world'];
// favoriteActivities = ['hello', 23];

console.log(person.name, person.age);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}