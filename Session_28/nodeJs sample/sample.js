console.log("hello from js")

const axios = require('axios').default;
axios.get("https://jsonplaceholder.typicode.com/todos")
.then(data => console.log(data.data))