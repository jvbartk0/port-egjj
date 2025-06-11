var numberToFind = 0
var attemps = 0

 function refresh(){
        var element = document.getElementById('bet');
        element.value = '';
        
        numberToFind = parseInt(Math.random() * 100);
        attempts = 0;

        console.log('The number to find: '+numberToFind);
    }

function verifyNumber(){

    var bet = document.getElementById('bet').value

    if(bet > 100 || bet < 1){
        alert ('Aposta inválida')
        return
    }
    if(bet > numberToFind)
    {
        attemps++
        alert('O número para ser encontrado é MENOR que o número escolhido!')
    }
    else if(bet < numberToFind)
    {
        attemps++
        alert('O número para ser encontrado é MAIOR que o número escolhido!')
    }
    else
    {
        alert('Parabéns, você acertou! Com ' +attemps+' erros.')
    }
}