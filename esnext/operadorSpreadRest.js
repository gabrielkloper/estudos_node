//operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função


//usar spread com objeto
const funcionario = {
    nome:'Maria',
    salario: 15000.00

}
const clone = {ativo:true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Marcelo', 'Vargas']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)

//uso rest
function listagem (primeiro, segundo, ...outros) {
    console.log(`Na lista estão: ${primeiro}, ${segundo}. Os demais são: ${outros.join(', ')}.`)
  }

listagem('Pedro', 'Maria', 'João', 'Marcus', 'Tiago', 'Livia')