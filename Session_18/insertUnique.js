var arr = [12,15,20,25,30]
var arr2 = []
console.log(arr)

const val = parseInt(prompt("enter uniques no u want to insert"))
var count
for(let i=0;i<arr.length;i++){
    if(val==arr[i]){
        count++
    }
}
if(count==0){
    arr2.push(val)
    console.log("data inserted")
}
else{
    console.log("data already exists")
}