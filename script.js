// Fonction pour afficher un message lors du clic sur le bouton
function afficherMessage() {
    alert("Merci d'avoir cliqué sur le bouton !");
}

// Fonctionnalité de soumission du formulaire de contact
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rafraîchissement de la page lors de la soumission
    alert("Merci pour votre message !");
});
