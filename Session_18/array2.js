let arr = [20,12,30,7,89,154]
arr.sort(function(a,b){
    return a-b
})
console.log(arr)

arr.sort(function(a,b){
    return b-a
})
console.log(arr)