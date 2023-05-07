function getPerson(obj) {
    try {
        if (!obj || typeof obj !== "object" || !obj.hasOwnProperty("name") || !obj.hasOwnProperty("age")) {
            throw new Error("Invalid Object");
        }
        // Function destructures 
        const { name, age } = obj;
        return `Name:${name},Age:${age}`;

    } catch (e) {
        // return e.message;
        return "Invalid Object"
    }
}

console.log(getPerson({ name: "Shushil", age: 20 }));
console.log(getPerson({ name: "Shushil" }));