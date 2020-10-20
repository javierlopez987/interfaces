document.addEventListener("DOMContentLoaded", function() {

    let statusBar = document.querySelector(".loader");
    load();
    
    console.log(statusBar);
    
    function load() {
        if(statusBar.classList.toggle("loading")) {
            setTimeout(loaded, 1000);
        };
    }

    function loaded() {
        statusBar.classList.toggle("loaded");
    }
    console.log(statusBar);
})