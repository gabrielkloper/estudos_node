const _= require('lodash')

for (let index = 0; index < 10; index++) {
setInterval(() => {
    console.log(_.random(0, 5000))
}, 1000)
}