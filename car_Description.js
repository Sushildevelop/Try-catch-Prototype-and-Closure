class Car {
    company;
    model;
    year;
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }
    getDiscription() {
        return "This is a " + this.year + " " + this.company + " " + this.model;
    }

}
const car = new Car("Skoda", "Rapid", 2022)
console.log(car.getDiscription());