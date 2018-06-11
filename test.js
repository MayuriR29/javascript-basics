const gentlePets = ['puppy', 'rabbit', 'chicken']
const aggressivePets = ['dragon', 'cobra', 'tiger']
const allPets=  [...gentlePets,'fish',...aggressivePets];
console.log(allPets);
//Destructuring objects
const fluffypuppy = {
    name: 'fluffy',
    type: 'puppy',
    age: 5
}
const{name,type,age}=fluffypuppy;
console.log(name,type,age);
const person={name:"david",address:{country:"Singapore"}};
