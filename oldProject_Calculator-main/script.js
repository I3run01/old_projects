/*Entrada de dados do usuário*/
listauser = []
listaconsole = ['f']
var texto = document.getElementById('conta')
texto.innerHTML = ''


function um() {principal('1')}
function dois() {principal('2')}
function tres() {principal('3')}
function quatro() {principal('4')}
function cinco() {principal('5')}
function seis() {principal('6')}
function sete() {principal('7')}
function oito() {principal('8')}
function nove() {principal('9')}
function zero() {principal('0')}
function ponto() {principal('.')}
function mais() {principal('+')}
function menos() {principal('-')}
function vezes() {principal('*')}
function dividir() {principal('/')}
function abrepa() {principal('(')}
function fechapa() {principal('(')}
function apaga() {
    if (listauser.length <= 1){
        this.listauser = []
        this.listaconsole = ['f']
        principal('')
    }
    else {
        this.listauser.pop()
        this.listaconsole.pop()
        var elemf = listauser[listauser.length-1]
        this.listauser.pop()
        this.listaconsole.pop()
        principal(elemf)
    }
    
}
function reseta() {
    this.listauser = []
    this.listaconsole = ['f']
    principal('')

}

function porcentagem() {
    principal('%')
}


/*
principal('2')
principal('1')
principal('+')
principal('3')
principal('.')
principal('5')
principal('+')
principal('5')
principal('*')
principal('8')
principal('*')
principal('1')
principal('+')
principal('8')
principal('*')
principal('3')
principal('-')
principal('9')
principal('0')
principal('*')
principal('7')
principal('/')
principal('6')
principal('+')
principal('4')
principal('0')
principal('0')
principal('%')
principal('+')
principal('7')
*/

/*funções auxiliares*/
function isNumber(a) {
    var contador = 0
    var ver = 'true'
    for (var c of a) {
        if (
            c === '.' ||
            c === '0' ||
            c ===  '1' ||
            c ===  '2' ||
            c ===  '3' ||
            c ===  '4' ||
            c ===  '5' ||
            c ===  '6' ||
            c ===  '7' ||
            c ===  '8' ||
            c ===  '9'
            )
            {
                cont = 0
            }
        else {
            cont = 1
            }
        contador = contador + cont
    } 
    if (contador == 0) {ver = 'true'}
    else {ver = 'false'}
    return  ver
}

function principal(a) {
    this.listauser.push(a)
    this.listaconsole.push(a)

    var tam = listauser.length
    
    
    
    for (var c = 0; c < listaconsole.length; c++ ) {
        if ((isNumber(listaconsole[c]) == 'true')
            &&
            (isNumber(listaconsole[c-1]) == 'true'))
            {
                listaconsole[c] = listaconsole[c-1]+listaconsole[c]
                listaconsole[c-1] = 'nulo'
            }
    }

    var elemnulo = listaconsole.indexOf('nulo')

    while (elemnulo >= 0) {
        listaconsole.splice(elemnulo,1)
        var elemnulo = listaconsole.indexOf('nulo')

    }

    var equacaouser = ''
    for (var c = 0; c < tam; c++) {
        equacaouser = equacaouser+listauser[c]
    }
    
    texto.innerHTML = equacaouser
    
   
}


function igual(){
    listaconsole.splice(0,1)
    var equacaoconsole = ''
    for (var c = 0; c < listaconsole.length; c++) {
        equacaoconsole = equacaoconsole+listaconsole[c]
    }

    conta = equacaoconsole.split('+')
    var soma = 0

    for(var c = 0; c < conta.length; c++) {
        conta[c] = conta[c].split('-')
        var subtracao = 0

        for (var d = 0; d < conta[c].length; d++) {
            conta[c][d] = conta[c][d].split('/')
            var divisor = 1

            for (var e = 0; e < conta[c][d].length;e++) {
                conta[c][d][e] = conta[c][d][e].split('*')
                var multiplicador = 1

                for (var f = 0; f < conta[c][d][e].length; f++) {
                    const ulttermo = conta[c][d][e][f].length-1
                    if (conta[c][d][e][f][ulttermo] == '%') {
                        const str = conta[c][d][e][f].substring(0, conta[c][d][e][f].length - 1)
                        var valordec = Number(str)/100
                        conta[c][d][e][f] = valordec
                    }
                    
                    conta[c][d][e][f] = Number(conta[c][d][e][f])
                    multiplicador = multiplicador*conta[c][d][e][f] 
                }
                conta[c][d][e] = multiplicador
                divisor = divisor*conta[c][d][e]
            }
            divisor = divisor/conta[c][d][0]
            conta[c][d] = conta[c][d][0]/divisor

            subtracao = conta[c][d]+subtracao
        }
        subtracao = subtracao-conta[c][0]
        conta[c] = conta[c][0] - subtracao

        soma = conta[c] + soma
    }
    conta = soma
    conta = String(conta)

    texto.innerHTML = conta
    listauser = []
    listaconsole = ['f']
}