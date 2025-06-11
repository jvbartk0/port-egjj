document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertCtoFBtn = document.getElementById('convertCtoF');
    const convertFtoCBtn = document.getElementById('convertFtoC');
    const resetBtn = document.getElementById('reset');

    convertCtoFBtn.addEventListener('click', () => {
        if (!celsiusInput.value && celsiusInput.value !== '0') {
            alert('Por favor, digite um valor em Celsius');
            return;
        }
        
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    });

    convertFtoCBtn.addEventListener('click', () => {
        if (!fahrenheitInput.value && fahrenheitInput.value !== '0') {
            alert('Por favor, digite um valor em Fahrenheit');
            return;
        }
        
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2);
    });

    resetBtn.addEventListener('click', () => {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
    });

    celsiusInput.addEventListener('input', () => {
        if (celsiusInput.value && !isNaN(celsiusInput.value)) {
            const celsius = parseFloat(celsiusInput.value);
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            fahrenheitInput.value = '';
        }
    });

    fahrenheitInput.addEventListener('input', () => {
        if (fahrenheitInput.value && !isNaN(fahrenheitInput.value)) {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            const celsius = (fahrenheit - 32) * 5/9;
            celsiusInput.value = celsius.toFixed(2);
        } else {
            celsiusInput.value = '';
        }
    });
});