'use strict'

const countDown = (count) =>{
    count === -1 ? console.log('we have lift of') : console.log(count)
}

for(let i=10;i>=-1;i--){
    countDown(i)
}