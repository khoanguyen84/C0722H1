export default function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;
}

export function times(...rest) {
    let total = 1;
    for (let i = 0; i < rest.length; i++) {
        total *= rest[i];
    }
    return total;
}

export function subtract(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total -= rest[i];
    }
    return total;
}


// export default (ko bắt buộc, nếu dùng chỉ được 1 lần trong 1 file)
// export bao nhiêu cũng được