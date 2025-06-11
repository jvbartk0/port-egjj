document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const elements = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds"),
        btnControle: document.getElementById("btnControle"),
        btnAlterarData: document.getElementById("btnAlterarData"),
        novaData: document.getElementById("novaData"),
        timer: document.querySelector(".timer"),
        container: document.querySelector(".container")
    };

    // Variáveis de controle
    let dataFinal = new Date();
    dataFinal.setDate(dataFinal.getDate() + 1); // Amanhã como data padrão
    let intervalo;
    let pausado = false;

    // Configuração inicial
    function inicializar() {
        // Formata a data padrão para o input
        const dataFormatada = formatarDataParaInput(dataFinal);
        elements.novaData.value = dataFormatada;
        
        // Inicia o contador
        iniciarContador();
        
        // Event Listeners
        elements.btnControle.addEventListener("click", toggleContador);
        elements.btnAlterarData.addEventListener("click", alterarData);
    }

    // Função para formatar data para o input datetime-local
    function formatarDataParaInput(date) {
        const ano = date.getFullYear();
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const dia = String(date.getDate()).padStart(2, '0');
        const horas = String(date.getHours()).padStart(2, '0');
        const minutos = String(date.getMinutes()).padStart(2, '0');
        
        return `${ano}-${mes}-${dia}T${horas}:${minutos}`;
    }

    // Inicia o contador
    function iniciarContador() {
        clearInterval(intervalo);
        atualizarTempo();
        
        if (!pausado) {
            intervalo = setInterval(atualizarTempo, 1000);
        }
    }

    // Pausa/Continua o contador
    function toggleContador() {
        pausado = !pausado;
        elements.btnControle.textContent = pausado ? "Continuar" : "Pausar";
        elements.btnControle.classList.toggle("pausado", pausado);
        
        // Feedback visual
        const mensagem = pausado ? "⏸ Contador pausado" : "▶ Contador em execução";
        const cor = pausado ? "#e74c3c" : "#2ecc71";
        mostrarMensagemTemporaria(mensagem, cor);
        
        iniciarContador();
    }

    // Altera a data final
    function alterarData() {
        if (!elements.novaData.value) {
            mostrarMensagemTemporaria("Selecione uma data válida!", "#e74c3c");
            return;
        }

        const dataSelecionada = new Date(elements.novaData.value);
        const agora = new Date();
        
        if (dataSelecionada <= agora) {
            mostrarMensagemTemporaria("A data deve ser no futuro!", "#e74c3c");
            return;
        }

        dataFinal = dataSelecionada;
        iniciarContador();

        // Feedback visual
        mostrarMensagemTemporaria("Data alterada com sucesso!", "#2ecc71");
    }

    // Mostra mensagem temporária
    function mostrarMensagemTemporaria(mensagem, cor) {
        // Remove mensagens anteriores
        const mensagemAnterior = document.querySelector('.temp-message');
        if (mensagemAnterior) {
            mensagemAnterior.remove();
        }
        
        const msgElement = document.createElement('div');
        msgElement.className = 'temp-message';
        msgElement.textContent = mensagem;
        msgElement.style.backgroundColor = cor;
        
        document.body.appendChild(msgElement);
        
        setTimeout(() => {
            msgElement.style.opacity = '0';
            setTimeout(() => msgElement.remove(), 500);
        }, 2000);
    }

    // Atualiza o contador
    function atualizarTempo() {
        const agora = new Date().getTime();
        const diferenca = dataFinal.getTime() - agora;

        if (diferenca <= 0) {
            clearInterval(intervalo);
            elements.timer.innerHTML = `
                <div class="time-box terminado">
                    <span style="font-size: 2rem;">🎉</span>
                    <h2>O EVENTO COMEÇOU!</h2>
                </div>
            `;
            elements.btnControle.style.display = "none";
            elements.novaData.style.display = "none";
            document.querySelector('.date-picker label').style.display = "none";
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        elements.days.textContent = dias.toString().padStart(2, "0");
        elements.hours.textContent = horas.toString().padStart(2, "0");
        elements.minutes.textContent = minutos.toString().padStart(2, "0");
        elements.seconds.textContent = segundos.toString().padStart(2, "0");
    }

    // Inicializa o aplicativo
    inicializar();
});