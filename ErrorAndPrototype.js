function covertToNumber(str) {
    try {
        const num = Number(str);
        if (isNaN(num)) {
            throw new Error("Invalid Number");
            // return null;
            // console.log("Invalid Number");
        }
        return num;
    } catch (e) {
        return "Invalid Number!";
    }
}

console.log(covertToNumber("123"));
console.log(covertToNumber("abc"));