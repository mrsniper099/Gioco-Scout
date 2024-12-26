// Definire un array con le immagini e i nomi delle specialità scout
const specialitaScout = [
    { nome: "Specialità Artigianato", immagine: "https://cdn.storeden.net/secache/659be5a5be7ea0e81369ac01" },
    { nome: "Specialità Artista", immagine: "https://cdn.storeden.net/secache/659be5a85fb8e0e9c62275cd" },
    { nome: "Specialità Musica", immagine: "https://cdn.storeden.net/secache/659be5a35fb8e003c52275de" },
    { nome: "Specialità Astronomo", immagine: "https://cdn.storeden.net/secache/659be5aa5fb8e010c02275e7" },
    { nome: "Specialità Interprete", immagine: "https://cdn.storeden.net/secache/659be5aa5fb8e010c02275e7" },
    { nome: "Specialità Animazione", immagine: "https://cdn.storeden.net/secache/659be5ebbe7ea0b91169ac1a" },
    { nome: "Specialità Ambiente Aquatico", immagine: "https://cdn.storeden.net/secache/659be5e45fb8e040c32275dc" },
    { nome: "Specialità Ambiente", immagine: "https://cdn.storeden.net/secache/659be5e600f220859c6b55b5" },
    { nome: "Specialità Esplorazione", immagine: "https://cdn.storeden.net/secache/659be5f05fb8e07daf227649" },
    { nome: "Specialità Collezionismo", immagine: "https://cdn.storeden.net/secache/659be5b1be7ea0b81369ac02" },
    { nome: "Specialità Avventura", immagine: "https://cdn.storeden.net/secache/659be5edbe7ea0c91169ac3a" },
    { nome: "Specialità Orientamento", immagine: "https://cdn.storeden.net/secache/659be5fb5fb8e0f6c42275dc" },
];

// Caricare il suono
const audio = new Audio('https://s72.notube.re/download.php?token=dbee33eabac995068c6f03662ef24545&key=5dwuzb4c3f3xmdzg');  // Modifica con il link del tuo audio

// Riferimenti agli elementi del DOM
const rollButton = document.getElementById("rollButton");
const resultDisplay = document.getElementById("result");
const specialitaImage = document.getElementById("specialitaImage");

// Aggiungi un event listener al bottone per lanciare il dado
rollButton.addEventListener("click", function() {
    // Riproduci il suono
    audio.play();

    // Genera un numero casuale tra 0 e 11 (12 specialità)
    const dado = Math.floor(Math.random() * 12);

    // Mostra il nome della specialità scelta
    resultDisplay.textContent = `La specialità selezionata è: ${specialitaScout[dado].nome}`;

    // Cambia l'immagine della specialità
    specialitaImage.src = specialitaScout[dado].immagine;
});
