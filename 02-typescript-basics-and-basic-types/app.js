// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Alain',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
// let favoriteActivities: string[];
var favoriteActivities;
favoriteActivities = ['hello', 23];
console.log(person.name, person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
