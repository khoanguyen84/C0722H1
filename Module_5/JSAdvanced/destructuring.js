let jobs = ["java", "react", "vuejs", "JS"];

let [java, react, , js] = jobs;
// let java = jobs[0];
// let react = jobs[1];
// let vuejs = jobs[2];
// console.log(java, react, js);

function useState() {
    return [1, function () {
        return 1111;
    }]
}

// let result = useState();

// let [state, setState] = result;

let [state, setState] = useState();

// console.log(state);
// console.log(setState());

let obj = {
    name: "iphone 14",
    price: 30000000,
    quantity: 2,
    getAmount: function () {
        return price * quantity
    }
}

let { getAmount, name_1, price, quantity } = obj;

console.log(name_1);