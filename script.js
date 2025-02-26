document.addEventListener("DOMContentLoaded", function() {
    // Exibir a mensagem de desculpas ao clicar no botão "Enviar Desculpas"
    document.getElementById('showMessage').addEventListener('click', function() {
        let message = document.getElementById('message');
        message.classList.remove('hidden'); // Torna a mensagem visível
        message.style.opacity = 1;

        // Mostrar os botões de resposta "Sim" e "Não"
        document.getElementById('responseButtons').classList.remove('hidden');
    });

    // Função para o botão "Sim"
    document.getElementById('yesButton').addEventListener('click', function() {
        // Exibe a resposta de "Sim"
        let responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = "Obrigada por me perdoar! Você é incrível! 😍❤️";
        responseMessage.style.color = "#6aff66"; // Cor verde (para "Sim")
        responseMessage.classList.remove('hidden'); // Torna a resposta visível
    });

    // Função para o botão "Não"
    document.getElementById('noButton').addEventListener('click', function() {
        // Exibe a resposta de "Não"
        let responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = "Eu entendo... vou tentar ser melhor. 😔💖";
        responseMessage.style.color = "#ff6666"; // Cor vermelha (para "Não")
        responseMessage.classList.remove('hidden'); // Torna a resposta visível
    });
});