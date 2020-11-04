document.addEventListener("DOMContentLoaded", function() {

        //#region Menu Hamburguesa
        let hamburger = document.querySelector('.hamburger');
        let menu = document.querySelector('.navbar');
        let items = document.querySelectorAll(".navbar li a.delay");
        
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
        });
    
        items.forEach(item => {
            item.addEventListener("click", closeMenu);
        });
    
        function closeMenu() {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        }
    
        //#endregion
})