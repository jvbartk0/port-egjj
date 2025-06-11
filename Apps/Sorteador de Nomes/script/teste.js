
    let listaDeNomes = [];

    function adicionarItem() {
        const input = document.querySelector('.Nome');
        const nome = input.value.trim();

        if (nome === '') {
            alert('Por favor, insira um nome válido.');
            return;
        }

        listaDeNomes.push(nome);
        input.value = ''; // limpa o input

        // Mostra nomes adicionados na div .meio
        const meioDiv = document.querySelector('.meio');
        meioDiv.innerHTML = '<ul>' + listaDeNomes.map(nome => `<li>${nome}</li>`).join('') + '</ul>';
        

    }

    function sortearItem() {
        if (listaDeNomes.length === 0) {
            alert('Nenhum nome foi adicionado para o sorteio.');
            return;
        }

        const indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
        const nomeSorteado = listaDeNomes[indiceSorteado];

        const resultadoDiv = document.querySelector('.resultado');
        resultadoDiv.innerHTML = `<p>Nome sorteado: <strong>${nomeSorteado}</strong></p>`;
    }
