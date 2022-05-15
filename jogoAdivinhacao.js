var numeroSecreto = 10
var chuteDoJogador = Number(document.getElementById('chuteDoJogador'))
var palpiteUsuario = Number(document.querySelector('enviarPalpite#value'))

function verificar() {

    if (palpiteUsuario === numeroSecreto) {
        res.innerHTML = ("Você acertou, parabéns!")
    } else if (palpiteUsuario < numeroSecreto) {
        res.innerHTML = ("Seu palpite foi muito baixo!")
    } else {
        res.innerHTML = ("Seu palpite foi muito alto!")
    }
}