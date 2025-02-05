const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

const nome ='Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi, gente!'
    }
}


//class
class Animal{
    nome = this.nome;
}

class Cachorro extends Animal {
    falar(){
        return `Au au ${this.nome}!`
    }
}

let cachorro = new Cachorro;
cachorro.nome = 'Billy'

console.log(cachorro.falar())



