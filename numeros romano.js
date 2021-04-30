
function romano(rom){
    let n = 0;
    const numeros = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    for (let i = 0 ;i < rom.length;i++){
        let atual = rom[i];
        let prox = rom[i+1];
        

        if (prox && numeros [prox]>numeros[atual]){
            n -= numeros[atual];
        }else{
            n += numeros[atual];
        }
    }

    return n;
}
console.log(romano('XVIII'))