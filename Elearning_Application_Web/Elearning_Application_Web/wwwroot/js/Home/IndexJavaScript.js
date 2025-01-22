
    const open_menu = document.getElementById('open-menu');
    const mobile_navigation_menu = document.querySelector('.mobile-navigation-menu');
    const close_menu_cat = document.getElementById('close-menu-cat');
    const search_btn= document.getElementById('search-btn');
    const search_navigation = document.querySelector('.search-navigation');
    const close_search = document.getElementById('close-search');
    const menu_profile =document.querySelector('.menu-profile');
    const profile_down = document.getElementById('profile-down');
    const profile_up = document.getElementById('profile-up');
    const btn_profile = document.getElementById('btn-profile');

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

    // Fermer le menu si un clic se produit hors du menu
    window.addEventListener('click', function (event) {
        mobile_navigation_menu.classList.remove('active');
        });

    search_btn.addEventListener('click', function (event) {
        search_navigation.classList.toggle('activeSearch');
    event.stopPropagation();
        });
    close_search.addEventListener('click' , function(event){
        search_navigation.classList.remove('activeSearch');
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


