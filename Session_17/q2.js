let data = [1,2,4,0]
console.log(data)

let data2 = data.slice(0,2)
let data3 = data.slice(2,4)
console.log(data2)
console.log(data3)
//let a = splice()
console.log(data2.splice(2,0,data3))