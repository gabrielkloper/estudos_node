//iterar em cima de string, array, map

//string
for(let letra of "Gabriel"){
    console.log(letra)
}


const carros = ['fusca', 'gol', 'saveiro']
//array
for(let carro of carros){
    console.log(carro)
}


const assuntosMap = new Map([
    ['Map', {abordado:true}],
    ['Set', {abordado:true}],
    ['Promise', {abordado:false}],
])
//map
for(let assunto of assuntosMap){
    console.log(assunto)
}
for(let chave of assuntosMap.keys()){
    console.log(chave)
}
for(let valor of assuntosMap.values()){
    console.log(valor)
}
for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

const s = new Set(['a','b','c'])
//set
for (let letra of s){
    console.log(letra)
}