const person={
	firstname:'john',
	lastname:'smith',
	age:'26',
};
Object.seal(person);
person.lastname='doe';
delete person.age;
console.log(person);