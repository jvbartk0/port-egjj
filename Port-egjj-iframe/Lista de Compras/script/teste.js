function limparLista() {
  const lista = document.getElementById('lista');
  lista.innerHTML = ''; // apaga tudo
}

function adicionarItem() {
    const input = document.getElementById('texto');
    const texto = input.value.trim();
    if (!texto) return; // não adiciona item vazio

    const lista = document.getElementById('lista');

    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between'; 
    li.style.alignItems = 'center'; 
    li.style.padding = '5px'; 
    li.style.backgroundColor = 'white';
    li.style.height = '10vh';
    li.style.width = '80vh';
    li.style.margin = '4px';
    li.style.borderRadius = '15px';

    // Cria span para o texto
    const spanTexto = document.createElement('span');
    spanTexto.textContent = texto;

    // Ao clicar no texto, marca/desmarca como comprado
    spanTexto.style.cursor = 'pointer';
    spanTexto.addEventListener('click', function() {
      spanTexto.classList.toggle('comprado');
    });

    //Botão para remover item
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('corRemover')
    botaoRemover.addEventListener('click', function (event) {
        event.stopPropagation(); 
        lista.removeChild(li);
    });

    li.appendChild(spanTexto);
    li.appendChild(botaoRemover);
    lista.appendChild(li);

    input.value = '';
    input.focus();
}
