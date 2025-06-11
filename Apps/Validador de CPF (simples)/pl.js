document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('cpf');
    const validarBtn = document.getElementById('validar');
    const resultadoDiv = document.getElementById('resultado');
    const cpfFormatadoSpan = document.getElementById('cpf-formatado');
    const statusSpan = document.getElementById('status');

    cpfInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 3) {
            value = value.substring(0, 3) + '.' + value.substring(3);
        }
        if (value.length > 7) {
            value = value.substring(0, 7) + '.' + value.substring(7);
        }
        if (value.length > 11) {
            value = value.substring(0, 11) + '-' + value.substring(11);
        }
        
        e.target.value = value.substring(0, 14);
    });

    validarBtn.addEventListener('click', () => {
        const cpf = cpfInput.value.replace(/\D/g, '');
        
        if (!cpf || cpf.length !== 11) {
            alert('Por favor, digite um CPF válido com 11 dígitos');
            return;
        }
        
        const valido = validarCPF(cpf);
        
        const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        cpfFormatadoSpan.textContent = cpfFormatado;
        
        if (valido) {
            statusSpan.textContent = 'VÁLIDO';
            statusSpan.className = 'valido';
        } else {
            statusSpan.textContent = 'INVÁLIDO';
            statusSpan.className = 'invalido';
        }
        
        resultadoDiv.classList.remove('hidden');
    });

    function validarCPF(cpf) {
        if (/^(\d)\1{10}$/.test(cpf)) return false;
        
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;
        
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;
        
        return true;
    }
});