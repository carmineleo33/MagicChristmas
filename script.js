/* Importazione font da Google */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Lato:wght@300;400&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden; /* Nasconde le scrollbar causate dai fiocchi */
    position: relative; /* Necessario per posizionare i fiocchi */
    
    /* Questo crea il background animato e colorato! */
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
}

/* Animazione del gradiente */
@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* --- Nuovi Stili per Fiocchi di Neve e Stelle --- */

/* Contenitore fiocchi di neve */
.snowflakes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Non blocca interazioni */
    z-index: 0; /* Dietro il contenuto principale */
}

.snowflake {
    color: #FFF;
    font-size: 1em;
    font-family: Arial, sans-serif;
    text-shadow: 0 0 5px #000;
    position: absolute;
    top: -10%;
    animation: snow linear infinite;
    z-index: 1000; /* Assicurati che siano sopra il background ma sotto il container */
}

@keyframes snow {
    0% { transform: translate3d(0, 0, 0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translate3d(var(--x), var(--y), 0); opacity: 0; }
}

/* Animazioni individuali per i fiocchi */
.snowflake:nth-child(1) { animation-delay: 0s; left: 2%; --x: 20px; --y: 100vh; font-size: 1.2em;}
.snowflake:nth-child(2) { animation-delay: 2s; left: 15%; --x: -30px; --y: 90vh; font-size: 0.8em; }
.snowflake:nth-child(3) { animation-delay: 4s; left: 30%; --x: 40px; --y: 110vh; font-size: 1.5em; }
.snowflake:nth-child(4) { animation-delay: 6s; left: 45%; --x: -20px; --y: 80vh; font-size: 1em; }
.snowflake:nth-child(5) { animation-delay: 8s; left: 60%; --x: 30px; --y: 105vh; font-size: 1.3em; }
.snowflake:nth-child(6) { animation-delay: 10s; left: 75%; --x: -10px; --y: 95vh; font-size: 0.9em; }
.snowflake:nth-child(7) { animation-delay: 12s; left: 88%; --x: 25px; --y: 120vh; font-size: 1.6em; }
.snowflake:nth-child(8) { animation-delay: 14s; left: 5%; --x: -15px; --y: 85vh; font-size: 1.1em; }
.snowflake:nth-child(9) { animation-delay: 16s; left: 22%; --x: 35px; --y: 115vh; font-size: 1.4em; }
.snowflake:nth-child(10) { animation-delay: 18s; left: 38%; --x: -25px; --y: 100vh; font-size: 0.7em; }
.snowflake:nth-child(11) { animation-delay: 20s; left: 55%; --x: 10px; --y: 90vh; font-size: 1.2em; }
.snowflake:nth-child(12) { animation-delay: 22s; left: 70%; --x: -5px; --y: 100vh; font-size: 1.5em; }

/* Stile per le stelle (un effetto leggermente diverso, più scintillante) */
#stars, #stars2, #stars3 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: #000; /* Sarà coperto dal gradiente, serve solo per il box-shadow */
    z-index: -1; /* Dietro tutto */
}

#stars {
    background: transparent url('../img/stars.png') repeat top center; /* se volessi usare un'immagine di stelle */
    /* Alternative con box-shadow per generare le stelle */
    box-shadow: 0 0 100px 100px #fff;
    animation: animateStars 50s linear infinite;
}

#stars2 {
    animation: animateStars 100s linear infinite;
    box-shadow: 0 0 100px 100px #fff;
    transform: scale(0.5);
}

#stars3 {
    animation: animateStars 150s linear infinite;
    box-shadow: 0 0 100px 100px #fff;
    transform: scale(0.25);
}

@keyframes animateStars {
    from { background-position: 0 0; }
    to { background-position: -10000px -10000px; }
}

/* Generazione stelle con box-shadow (più semplice, ma meno "casuale") */
/*
#stars {
    box-shadow: 0 0 100px 100px #FFF;
    animation: stars 50s linear infinite;
}
#stars2 {
    box-shadow: 0 0 100px 100px #FFF;
    animation: stars2 100s linear infinite;
    transform: scale(0.5);
}
#stars3 {
    box-shadow: 0 0 100px 100px #FFF;
    animation: stars3 150s linear infinite;
    transform: scale(0.25);
}

@keyframes stars {
    from { transform: translateX(0) translateY(0); }
    to { transform: translateX(-10000px) translateY(-10000px); }
}
@keyframes stars2 {
    from { transform: translateX(0) translateY(0); }
    to { transform: translateX(10000px) translateY(10000px); }
}
@keyframes stars3 {
    from { transform: translateX(0) translateY(0); }
    to { transform: translateX(-10000px) translateY(10000px); }
}
*/

/* --- Fine Nuovi Stili per Fiocchi di Neve e Stelle --- */

.container {
    background: rgba(0, 0, 0, 0.25); /* Leggermente più scuro per contrasto */
    padding: 40px 60px;
    border-radius: 20px;
    backdrop-filter: blur(12px); /* Blur leggermente maggiore */
    border: 1px solid rgba(255, 255, 255, 0.15); /* Bordo più visibile */
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4); /* Ombra più pronunciata e calda */
    max-width: 90%;
    z-index: 1; /* Assicura che il container sia sopra i fiocchi */
    position: relative; /* Necessario per z-index */
}

/* Colore del titolo leggermente più caldo/brillante */
h1 {
    font-family: 'Cinzel', serif;
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 30px;
    color: #FFD700; /* Oro scintillante */
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 255, 0, 0.5); /* Ombra più pronunciata e un tocco di giallo per brillare */
    line-height: 1.2;
}

.countdown-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap; /* Per adattarsi a schermi piccoli */
}

.time-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.15); /* Leggermente più visibile */
    padding: 20px;
    border-radius: 10px;
    min-width: 100px;
    min-height: 100px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Piccola ombra */
}

/* I numeri del countdown */
.time-block span:first-child {
    font-size: 3rem;
    font-weight: bold;
}

/* Le etichette "Giorni", "Ore", ecc. */
.time-block .label {
    font-size: 1rem;
    font-weight: 300;
    margin-top: 5px;
    text-transform: uppercase;
}

/* Lo stile per il messaggio di Natale */
.reveal-message h2 {
    font-family: 'Cinzel', serif;
    font-size: 3rem;
    color: #FFD700; /* Oro! */
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.reveal-message p {
    font-size: 1.5rem;
    font-weight: 400;
}

/* Media query per schermi piccoli (telefoni) */
@media (max-width: 600px) {
    .container {
        padding: 20px 30px;
    }
    h1 {
        font-size: 2.5rem;
    }
    .time-block {
        min-width: 70px;
        padding: 15px;
    }
    .time-block span:first-child {
        font-size: 2rem;
    }
    .reveal-message h2 {
        font-size: 2rem;
    }
    .reveal-message p {
        font-size: 1.2rem;
    }
}