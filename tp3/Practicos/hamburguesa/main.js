document.addEventListener("DOMContentLoaded", function() {
    
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
})
