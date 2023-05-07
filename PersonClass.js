class Person {
    name;
    age;
    constructor(name = "Unknown ", age = 0) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name} , Age:${this.age}`;
    }
}
const per = new Person("shushil", 20)
console.log(per.getDetails());
const per2 = new Person()
console.log(per2.getDetails());