const john = {
    age : 35,
    gender : 'M',
    weight : 78,
    height : 177.8,
}
const sarah = {
    age : 30,
    gender : 'F',
    weight : 65,
    height : 160.8,
}

const calcBmi = function(){
    return this.weight / (this.height/100) **2;
}
const calcBar = function(){
    if(this.gender === 'M'){
        return 66.47 + 13.75 * this.weight + 5.003 * this.height - 6.755 * this.age;
    }
    else{
        return 655.1 + 9.563 * this.weight + 1.8 * this.height - 4.676 * this.age;
    }
}

// calling a function within the context of an object
console.log(`John's BMI : ${calcBmi.call(john)}`)
console.log(`John's BMR : ${calcBar.call(john)}`)

console.log(`Sarah's BMI : ${calcBmi.call(sarah)}`)
console.log(`Sarah's BMR : ${calcBar.call(sarah)}`)

// Bind
const johnBmi = calcBmi.bind(john)
const sarahBmi = calcBmi.bind(sarah)
console.log(johnBmi)
console.log(sarahBmi)

