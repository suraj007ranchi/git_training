'use strict'

const numArray = [{x:0,y:2}, {x:2,y:13}, {x:32,y:12},{x:4,y:8}];

const multiNumber = obj => obj.x * obj.y;

for(let n=0;n<numArray.length;n++){
    console.log(`${numArray[n].x} x ${numArray[n].y} = ${multiNumber(numArray[n])}`);
}