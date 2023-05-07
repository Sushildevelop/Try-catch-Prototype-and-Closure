//Create the prototype object
function Student(name) {
    this.name = name;
}
// add a method to the prototype
Student.prototype.printDetails = function() {
    console.log("Hello, my name is  " + this.name);
};

let mithu = new Student("Mithun");
mithu.printDetails();