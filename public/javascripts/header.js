document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        if (nav.classList.contains('show')) {
            menuToggle.textContent = '✖';  // Change to X mark
        } else {
            menuToggle.textContent = '☰';  // Change back to hamburger
        }
    });
});
