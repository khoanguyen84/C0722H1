let numbers = [1, 4, 5, 66, 5]
// let numbers_2 = [10, 40, 50, 66, 15]

// this ~ context (ngữ cảnh)

if (Array.prototype.includes_2 != 'function') {
    Array.prototype.includes_2 = function (value) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return true;
            }
        }
        return false;
    }
}

if (Array.prototype.map_2 != 'function') {
    Array.prototype.map_2 = function (callback) {
        let array = [];
        for (let i = 0; i < this.length; i++) {
            array.push(callback(this[i]))
        }
        return array;
    }
}

// let result = numbers.includes_2(14);
// let result_2 = numbers_2.includes_2(40);
// console.log(result);
// console.log(result_2);

function process(value) {
    return value * 2;
}

function process_2(value){
    return `<button>${value}</button>`;
}
let result = numbers.map_2(process_2)

console.log(result);
// console.log(result.join(""));
document.write(result.join(""))