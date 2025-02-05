//Arrow Function
const soma = (a,b) => a + b
console.log(soma(2,3))

const multiplicacao = (a,b) => {
    return a*b
}

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico1()

//parametro default
function log(texto='node'){
    console.log(texto)
}
log()
log('Sou mais forte que o valor padrao')

//operador rest
function total(...numeros){
    let total=0
    numeros.forEach(n=> total += n)
    return total
}

console.log(total(2,3,4,5,6))