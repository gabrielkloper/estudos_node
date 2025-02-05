//estrutura que nao aceita repetição
const times = new Set()
times.add('Vasco').add('Botafogo').add('Fluminense')
times.add('Criciuma')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Criciuma')


const nomes = ['Gabriel', 'Gabriel', 'Julia']
const nomesSet = new Set(nomes)
console.log(nomesSet)