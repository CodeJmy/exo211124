// Récupération des éléments du DOM

let input = document.getElementById("taskInput");
let boutton = document.getElementById("addTaskButton");
let liste = document.getElementById("taskList");

// Fonction pour ajouter une tâche

function ajouter() {
   let newlist  = document.createElement("li");
   let newcontent = document.createTextNode(input.value);
   newlist.appendChild(newcontent);
   document.body.insertBefore(newlist,liste);
   input.value = '';
}

// Ajout de l'événement au bouton "Ajouter"

boutton.addEventListener("click", ajouter);

// Ajout de la tâche en appuyant sur "Entrée"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // Votre code ici
        ajouter();
    }
});
