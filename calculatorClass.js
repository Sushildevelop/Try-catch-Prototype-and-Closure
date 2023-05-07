class Calculaor {
    num1;
    num2;
    // constructor(num1, num2) {
    //     this.num1 = num1;
    //     this.num2 = num2;
    // }
    static addTwoNumber(num1, num2) {
        const sum = num1 + num2;
        console.log(sum);
    }
}
// const cal = new Calculaor(10, 5)
Calculaor.addTwoNumber(10, 5);