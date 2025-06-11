document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".login button");

    if (playButton) {
        playButton.addEventListener("click", (event) => {
            event.preventDefault(); // Impede o envio do formulário
            window.location.href = "game.html"; // Redireciona para a página do jogo
        });
    }
});




















