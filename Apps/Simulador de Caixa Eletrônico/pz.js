document.addEventListener('DOMContentLoaded', () => {

    const screens = {
        login: document.getElementById('login-screen'),
        mainMenu: document.getElementById('main-menu'),
        withdraw: document.getElementById('withdraw-screen'),
        deposit: document.getElementById('deposit-screen'),
        message: document.getElementById('message-screen')
    };
    const loginBtn = document.getElementById('login-btn');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const depositBtn = document.getElementById('deposit-btn');
    const balanceBtn = document.getElementById('balance-btn');
    const exitBtn = document.getElementById('exit-btn');
    const confirmWithdrawBtn = document.getElementById('confirm-withdraw');
    const cancelWithdrawBtn = document.getElementById('cancel-withdraw');
    const confirmDepositBtn = document.getElementById('confirm-deposit');
    const cancelDepositBtn = document.getElementById('cancel-deposit');
    const okBtn = document.getElementById('ok-btn');
    
    const cardNumberInput = document.getElementById('card-number');
    const pinInput = document.getElementById('pin');
    const withdrawAmountInput = document.getElementById('withdraw-amount');
    const depositAmountInput = document.getElementById('deposit-amount');
    
    const accountBalanceDisplay = document.getElementById('account-balance');
    const messageTitle = document.getElementById('message-title');
    const messageText = document.getElementById('message-text');
    
    let account = {
        cardNumber: '1234567890123456',
        pin: '1234',
        balance: 1500.00
    };
    
    function showScreen(screen) {

        Object.values(screens).forEach(s => s.classList.add('hidden'));

        screen.classList.remove('hidden');
    }
    
    function formatCurrency(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
    function showMessage(title, text) {
        messageTitle.textContent = title;
        messageText.textContent = text;
        showScreen(screens.message);
    }
    
    loginBtn.addEventListener('click', () => {
        const cardNumber = cardNumberInput.value;
        const pin = pinInput.value;
        
        if (cardNumber === account.cardNumber && pin === account.pin) {
            accountBalanceDisplay.textContent = formatCurrency(account.balance);
            showScreen(screens.mainMenu);
            cardNumberInput.value = '';
            pinInput.value = '';
        } else {
            showMessage('Erro', 'Número do cartão ou senha incorretos');
        }
    });
    
    withdrawBtn.addEventListener('click', () => {
        withdrawAmountInput.value = '';
        showScreen(screens.withdraw);
    });
    
    depositBtn.addEventListener('click', () => {
        depositAmountInput.value = '';
        showScreen(screens.deposit);
    });
    
    balanceBtn.addEventListener('click', () => {
        showMessage('Saldo', `Seu saldo atual é: ${formatCurrency(account.balance)}`);
    });
    
    exitBtn.addEventListener('click', () => {
        showScreen(screens.login);
    });
    
    confirmWithdrawBtn.addEventListener('click', () => {
        const amount = parseFloat(withdrawAmountInput.value);
        
        if (isNaN(amount) || amount <= 0) {
            showMessage('Erro', 'Por favor, digite um valor válido');
            return;
        }
        
        if (amount > account.balance) {
            showMessage('Erro', 'Saldo insuficiente');
            return;
        }
        
        if (amount % 10 !== 0) {
            showMessage('Erro', 'O valor do saque deve ser múltiplo de 10');
            return;
        }
        
        account.balance -= amount;
        accountBalanceDisplay.textContent = formatCurrency(account.balance);
        showMessage('Sucesso', `Saque de ${formatCurrency(amount)} realizado com sucesso!`);
    });
    
    cancelWithdrawBtn.addEventListener('click', () => {
        showScreen(screens.mainMenu);
    });
    
    confirmDepositBtn.addEventListener('click', () => {
        const amount = parseFloat(depositAmountInput.value);
        
        if (isNaN(amount)) {
            showMessage('Erro', 'Por favor, digite um valor válido');
            return;
        }
        
        if (amount <= 0) {
            showMessage('Erro', 'O valor do depósito deve ser positivo');
            return;
        }
        
        account.balance += amount;
        accountBalanceDisplay.textContent = formatCurrency(account.balance);
        showMessage('Sucesso', `Depósito de ${formatCurrency(amount)} realizado com sucesso!`);
    });
    
    cancelDepositBtn.addEventListener('click', () => {
        showScreen(screens.mainMenu);
    });
    
    okBtn.addEventListener('click', () => {
        showScreen(screens.mainMenu);
    });
    
    document.querySelectorAll('.quick-amount').forEach(button => {
        button.addEventListener('click', () => {
            withdrawAmountInput.value = button.getAttribute('data-amount');
        });
    });
    
    cardNumberInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 16);
    });
    
    pinInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
    });
    
    showScreen(screens.login);
});