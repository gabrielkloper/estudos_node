function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        resolve(frase)  //resolve aceita apenas um parametro (no caso de querer passar mais de uma informação deve passar um Obj)
    }, segundos * 1000)
    })
    
}

falarDepoisDe(2, 'Que legal')
            .then(frase=> frase.concat('!!!'))
            .then(outraFrase =>console.log(outraFrase))
            .catch(e => console.log(e))