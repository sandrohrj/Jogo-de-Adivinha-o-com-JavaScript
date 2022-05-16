var numeroSecreto = Math.floor(Math.random()*100) +1
var tentativas = 0
// var contador = 10 - verificar onde inserir a quantidade.

function verificar() {
    
    var chuteDoJogador = document.querySelector('#chuteDoJogador')
    var res = document.querySelector('#res')
    var chuteDoJogadorFinal = Number(chuteDoJogador.value)
    var contador = Number(document.querySelector('#contador'))

    if (chuteDoJogadorFinal === numeroSecreto) {
        res.innerHTML = `Você acertou! Seu palpite foi: ${chuteDoJogadorFinal}`
    } else if (chuteDoJogadorFinal < numeroSecreto) {
        res.innerHTML = `Seu palpite foi menor que o número secreto! Seu palpite foi: ${chuteDoJogadorFinal}`
    } else {
        res.innerHTML = `Seu palpite foi maior que o número secreto! Seu palpite foi: ${chuteDoJogadorFinal}`
    }
}