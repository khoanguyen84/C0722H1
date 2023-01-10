class Staff{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
}

Staff.prototype.getAge = function(){
    return this.age;
}


let loi = new Staff("Lợi", 18);
console.log(loi.getAge());

Array.prototype.concat_2 = function(){

}

Array.prototype.length_2 = 10;