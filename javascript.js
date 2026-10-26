// VALIDATION DU FORMULAIRE

// récupérer les éléments dont on a besoin
// - l'élément <form>
const form = document.querySelector(".contact-form")
// - des inputs
const nameInput = document.querySelector("#name-input")
const emailInput = document.querySelector("#email-input")
const message = document.querySelector("#message")
// Les messages d'erreur & succès
const nameError = document.querySelector(".name-error")
const emailError = document.querySelector(".email-error")
const messageError = document.querySelector(".message-error")
const formSuccess = document.querySelector(".form-success")


// écouter l'événement "submit" sur le formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // déclarer un booléen
    let isValid = true;

    // si l'input du nom est vide,
    if (nameInput.value.trim() == "") {
        // afficher le message d'erreur du nom
        // const nameErrorClasses = nameError.classList
        // console.log(nameErrorClasses);
        // nameErrorClasses.remove("hidden")
        nameError.classList.remove("hidden")
        isValid = false;
    }

    if (emailInput.value.trim() == "") {
        emailError.classList.remove("hidden")
        isValid = false;
    }

    if (message.value.trim() == "") {
        messageError.classList.remove("hidden")
        isValid = false;
    }

    // Si isValid est true
    if (isValid) {
        // on affiche le message de succès
        formSuccess.classList.remove("hidden")

        // On cache les messages d'erreur
        nameError.classList.add("hidden")
        emailError.classList.add("hidden")
        messageError.classList.add("hidden")
        
        // On vide les inputs
        nameInput.value = "";
        emailInput.value = "";
        message.value = "";
    }
})

