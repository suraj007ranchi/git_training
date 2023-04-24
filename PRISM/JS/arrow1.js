'use strict'

// curly braces not required if function has only 1 line.
const areaOfReat = (l,w) => l*w
const areaOfPerimter = (l,w) => 2*l*w
console.log(areaOfReat(2,3))
console.log(areaOfPerimter(5,6))

const createUser = (user,age,isAdmin) => ({
    User : user,
    Age : age,
    IsAdmin : isAdmin
})
console.log(createUser('suraj',26,'yes'))