/*

38) ​ Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/





function verifacaSeEImpar  (inicio = 0, fim = 100 ) {
    if(inicio >  fim){
        [inicio, fim] = [fim, inicio]
        console.log(inicio, fim)
    }
     for ( inicio ; inicio < fim; inicio++ ){
        if (inicio % 2 ==1  ) {
                    console.log(inicio)
        }
    }
         
}
verifacaSeEImpar(0,200)
verifacaSeEImpar(120, 0)
verifacaSeEImpar()