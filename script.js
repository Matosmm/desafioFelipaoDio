function calcular(){
    var rank = 0
    var nome = 'Falcão Negro'
    var vitórias = 50
    var derrotas = 30
    rank += vitórias - derrotas
    
   
        if(rank <= 10) {
            console.log('O nível do heroi é ferro')
        } else if (rank > 10 && rank <= 20) {
            console.log(`O Herói ${nome} tem de saldo ${rank} e está no nível Bronze`)
        } else if (rank > 20 && rank <= 50) {
            console.log(`O Herói ${nome} tem de saldo ${rank} e está no nível prata`)
        } else if (rank > 50 && rank <= 80) {
            console.log(`O Herói ${nome} tem de saldo ${rank} e está no nível ouro`)
        } else if (rank >80 && rank <= 90) {
            console.log(`O Herói ${nome} tem de saldo ${rank} e está no nível diamante`)
        } else if (rank > 90 && rank <= 100) {
            console.log(`O Herói ${nome} tem de saldo ${rank} e está no nível Lendário`)
        } else {
            console.log(`O Herói ${nome} tem de saldo ${rank} e está no nível Ímortal` )
        } 
    
}
calcular()     
/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/