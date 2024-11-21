// Initialisation du compteur

let compteur = 0;

// Récupération des éléments du DOM

let p = document.getElementById("compteur");
let input1 = document.getElementById("increment");
let input2 = document.getElementById("decrement");

// Fonction pour mettre à jour l'affichage du compteur

function affichercptr() {
    p.innerText = compteur;
}

// Fonction pour augmenter le compteur
function augmenter() {
    compteur ++ ;
    affichercptr();
}


// Fonction pour diminuer le compteur
function diminuer() { 
    compteur -- ;
    affichercptr();
}
// Ajout des événements aux boutons

input1.addEventListener("click",augmenter);
input2.addEventListener("click",diminuer);

// Initialisation de l'affichage
