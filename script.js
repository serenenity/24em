var menuLinks = document.querySelectorAll('.menu-bar a');

menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
    document.getElementById('toggle').checked = false; // Uncheck the checkbox
    });
});