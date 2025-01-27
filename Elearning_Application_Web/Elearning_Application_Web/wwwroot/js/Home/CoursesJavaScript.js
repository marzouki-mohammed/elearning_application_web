












const open_menu = document.getElementById('open-menu');
const mobile_navigation_menu = document.querySelector('.mobile-navigation-menu');
const close_menu_cat = document.getElementById('close-menu-cat');
const menu_profile = document.querySelector('.menu-profile');
const profile_down = document.getElementById('profile-down');
const profile_up = document.getElementById('profile-up');
const btn_profile = document.getElementById('btn-profile');
const menu_profile_mobile = document.querySelector('.menu-profile-mobile');
const profile_down_mobile = document.getElementById('profile-down-mobile');
const profile_up_mobile = document.getElementById('profile-up-mobile');
const btn_profile_mobile = document.getElementById('btn-profile-mobile');



const filter_btn = document.getElementById('filter-btn');
const menu_filter = document.querySelector('.menu-filter');

// Ouvrir ou fermer le menu
open_menu.addEventListener('click', function (event) {
    mobile_navigation_menu.classList.toggle('active');
    event.stopPropagation(); // Empêche la propagation du clic
});

// Fermer le menu via le bouton de fermeture
close_menu_cat.addEventListener('click', function (event) {
    mobile_navigation_menu.classList.remove('active');
    event.stopPropagation(); // Empêche la propagation du clic
});

// Empêcher la fermeture du menu si l'on clique à l'intérieur
mobile_navigation_menu.addEventListener('click', function (event) {
    event.stopPropagation(); // Empêche la propagation du clic
});


filter_btn.addEventListener('click', function (event) {
    menu_filter.classList.toggle('activefilter');
    event.stopPropagation();
});
menu_filter.('click', function (event) {
    event.stopPropagation(); // Empêche la propagation du clic
});



// Fermer le menu si un clic se produit hors du menu
window.addEventListener('click', function (event) {
    mobile_navigation_menu.classList.remove('active');
    menu_filter.classList.remove('activefilter');
});



// Add event listener
btn_profile.addEventListener('click', function (event) {
    if (profile_up.style.display === 'block' || profile_up.style.display === '') {
        profile_up.style.display = 'none';
        profile_down.style.display = 'block';
        menu_profile.classList.add('activeProfile');
    } else {
        profile_up.style.display = 'block';
        profile_down.style.display = 'none';
        menu_profile.classList.remove('activeProfile');
    }
    // Prevent event propagation
    event.stopPropagation();
});
btn_profile_mobile.addEventListener('click', function (event) {
    if (profile_up_mobile.style.display === 'block' || profile_up.style.display === '') {
        profile_up_mobile.style.display = 'none';
        profile_down_mobile.style.display = 'block';
        menu_profile_mobile.style.display = 'block';
    } else {
        profile_up_mobile.style.display = 'block';
        profile_down_mobile.style.display = 'none';
        menu_profile_mobile.style.display = 'none';
    }
    // Prevent event propagation
    event.stopPropagation();
});



