const arr = [1, 2, 3, 4, 5];

function numberchecker(arr) {
    return function(num) {
        return arr.includes(num);
    }

}

const checkNum = numberchecker(arr);
console.log(checkNum(3));