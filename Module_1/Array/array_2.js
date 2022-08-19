let size = 10;
let min = 40, max = 50;
let uniqueNumbers = new Array(size);
let number = 0;
let isExist = false;
for (let i = 0; i < size; i++) {
    do {
        number = Math.floor(Math.random() * (max - min + 1) + min);
        isExist = false;
        for (let j = 0; j < uniqueNumbers.length; j++) {
            if (uniqueNumbers[j] == number) {
                isExist = true;
                break;
            }
        }
    }
    while (isExist);
    uniqueNumbers[i] = number;
}