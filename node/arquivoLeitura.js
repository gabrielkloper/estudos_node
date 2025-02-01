const fs = require('fs')

const caminho = __dirname +'/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8') 
    console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (error, result) => {
    const config = JSON.parse(result)
    console.log(config.db)
})


const config = require('./arquivo.json')
console.log(config.port)

fs.readdir(__dirname, (error, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})