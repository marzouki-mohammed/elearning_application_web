﻿// Lorsque la page est complètement chargée
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader-active');
    preloader.classList.add('fade-out'); // Ajouter la classe pour l'animation fadeOut

    // Retirer le préchargeur du DOM après l'animation
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 600); // La durée doit correspondre à celle définie dans fadeOut (0.6s)
});