document.addEventListener("DOMContentLoaded", function() {

    let statusBar = document.querySelector(".loader");
    let index = 0;
    
    load();
    
    function load() {
        if(statusBar.classList.toggle("loading")) {
            setTimeout(loaded, 1000);
        };
    }

    function loaded() {
        statusBar.classList.toggle("loaded");
    }

    // Periodo de tiempo debe estar coordinado con 
    setInterval(progress, 1000)
    function progress() {
        let progress = document.querySelector(".progress");
        previous = index++;
        if(previous <= 10)
            progress.innerHTML = previous*10 + "%";
    }
})