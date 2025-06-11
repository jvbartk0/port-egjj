function VerificarPrimo(){
    const numero = parseInt(document.getElementById("numero").value)
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)){
        resultado.textContent = "Digite um número válido! ";
        resultado.style,color = "red";
        return;
    }

    if (numero < 2){
        resultado.textContent = `${numero} nao é um numero primo!`;
        resultado.style.color = "red";
        return
    }

        let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) {
        resultado.textContent = `${numero} é um número primo!`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `${numero} não é um número primo!`;
        resultado.style.color = "red";
    }
}

