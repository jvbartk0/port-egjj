document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const content = document.getElementById('content');
    let isVisible = true;

    const toggleVisibility = () => {
        isVisible = !isVisible;
        
        if (isVisible) {
            content.classList.remove('hidden');
            toggleButton.textContent = 'Ocultar Conteúdo';
        } else {
            content.classList.add('hidden');
            toggleButton.textContent = 'Mostrar Conteúdo';
        }
    };

    toggleButton.addEventListener('click', toggleVisibility);
});