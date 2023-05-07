class Employee {
    name;
    position;
    salary;
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
const emp = new Employee("shushil", "web developer", 8000)
console.log(emp.getSalary());