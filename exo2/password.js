// Mot de passe correct

function correct() {
    message.innerText = "C'est ça mon gars";
}

function incorrect() {
    message.innerText = "C'est pas ça recommence"
}

// Récupération des éléments du DOM

let password = "motdepasse01";
let input = document.getElementById("passwordInput");
let bouton = document.getElementById("checkButton");
let p = document.getElementById("message");

// Fonction pour vérifier le mot de passe

function verifier() {
    if (input.value == password) {
        correct();
    }
    else{
        incorrect();
       
}
}

// Ajout de l'événement au bouton

bouton.addEventListener("click", verifier);