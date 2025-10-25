document.addEventListener('DOMContentLoaded', () => {

    // IMPOSTA LA DATA DI DESTINAZIONE (Natale 2025)
    // Nota: i mesi in JavaScript partono da 0 (Gennaio=0, Dicembre=11)
    const targetDate = new Date('2025-12-25T00:00:00').getTime();

    const countdownElement = document.getElementById('countdown');
    const revealElement = document.getElementById('reveal');

    // Se gli elementi non esistono, esci per evitare errori
    if (!countdownElement || !revealElement) return;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Aggiorna il countdown ogni secondo
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Se il tempo è scaduto
        if (distance < 0) {
            clearInterval(interval);
            // Nasconde il countdown
            countdownElement.style.display = 'none';
            // Mostra il messaggio di Natale!
            revealElement.style.display = 'block';
            return;
        }

        // Calcoli per giorni, ore, minuti e secondi
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Aggiorna i numeri sulla pagina (solo se gli elementi esistono)
        if (daysEl) daysEl.innerText = formatTime(days);
        if (hoursEl) hoursEl.innerText = formatTime(hours);
        if (minutesEl) minutesEl.innerText = formatTime(minutes);
        if (secondsEl) secondsEl.innerText = formatTime(seconds);

    }, 1000);

    // Funzione per aggiungere uno '0' davanti ai numeri < 10
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
});