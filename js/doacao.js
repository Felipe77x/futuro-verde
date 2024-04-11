function updateClock() {
    var now = moment(); // Obtém a hora atual usando Moment.js
    var formattedTime = now.format('HH:mm:ss'); // Formata a hora como HH:mm:ss

    document.getElementById('clock').textContent = formattedTime; // Atualiza o elemento HTML com o tempo formatado
}

// Chama a função updateClock a cada segundo
setInterval(updateClock, 1000);