
    const palavras = ["Portfólio", "EGJJ"];
    let i = 0;
    let j = 0;
    let apagando = false;
    const velocidade = 100; // tempo entre letras
    const espera = 1500; // tempo parado antes de apagar
    const elemento = document.getElementById("texto");

    function digitar() {
      const palavra = palavras[i];

      if (!apagando) {
        elemento.textContent = palavra.substring(0, j + 1);
        j++;
        if (j === palavra.length) {
          apagando = true;
          setTimeout(digitar, espera);
          return;
        }
      } else {
        elemento.textContent = palavra.substring(0, j - 1);
        j--;
        if (j === 0) {
          apagando = false;
          i = (i + 1) % palavras.length;
        }
      }
      setTimeout(digitar, velocidade);
    }

    digitar();
 


     