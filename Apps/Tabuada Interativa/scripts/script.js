const form = document.querySelector('form');
const resultadosDiv = document.querySelector('.resultados');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const numero = parseInt(document.getElementById('numeroSelecionado').value);
  const limite = parseInt(document.getElementById('multiplicarAte').value);
   const mensagemErro = document.getElementById('mensagemErro'); 
  const resultadosDiv = document.getElementById('resultados'); 

  mensagemErro.innerHTML = ''; 
  resultadosDiv.innerHTML = ''; 

  if (isNaN(numero) || isNaN(limite) || limite <= 0) {
    mensagemErro.innerHTML = '<p>Por favor, digite números válidos.</p>';
    return;
  }

  const tabela = document.createElement('table');
  tabela.style.width = '100%';
  tabela.style.borderCollapse = 'collapse';

  for(let i = 1; i <= limite; i++) {
    const resultado = numero * i;

    const linha = document.createElement('tr');

    const colunaOperacao = document.createElement('td');
    colunaOperacao.textContent = `${numero} x ${i}`;
    colunaOperacao.style.padding = '8px';
    colunaOperacao.style.borderBottom = '1px solid #ddd';
    colunaOperacao.style.textAlign = 'left';

    const colunaResultado = document.createElement('td');
    colunaResultado.textContent = `${resultado}`;
    colunaResultado.style.padding = '8px';
    colunaResultado.style.borderBottom = '1px solid #ddd';
    colunaResultado.style.textAlign = 'right';

    linha.appendChild(colunaOperacao);
    linha.appendChild(colunaResultado);
    tabela.appendChild(linha);
  }

  resultadosDiv.appendChild(tabela);
});
