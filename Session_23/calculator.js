function add(a,b){
    return a+b
}
function subs(a,b){
    return a-b
}
function multi(a,b){
    return a*b
}
function div(a,b){
    return a/b
}

function wraper(args){
    return function (a){
        return function (b){
            return args(a,b)
        }
    }
}

function perform(option){
    //console.log("---------- enter your option -------")
    switch(option){
        case 1 : console.log(wraper(add)(10)(20))
                 break
        case 2 : console.log(wraper(subs)(10)(20))
                 break
        case 3 : console.log(wraper(multi)(10)(20))
                 break
        case 4 : console.log(wraper(div)(10)(20))
                 break
        default : console.log("enter currect option")
    }

}

let option = prompt("enter your choice")
console.log("my choice is",option)
perform(option)
console.log(wraper(add)(10)(20))