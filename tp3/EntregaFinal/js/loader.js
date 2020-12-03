document.addEventListener("DOMContentLoaded", function() {

    //#region LOADER
    let statusBar = document.querySelector(".loader");
    let index = 0;
    
    load();
    setTimeout(goHome, 3200);
    
    function load() {
        if(statusBar.classList.toggle("loading")) {
            setTimeout(loaded, 300);
        };
    }

    function loaded() {
        statusBar.classList.toggle("loaded");
    }

    // Periodo de tiempo debe estar coordinado con css .loading
    setInterval(progress, 280)
    function progress() {
        let progress = document.querySelector(".progress");
        previous = index++;
        if(previous <= 10)
            progress.innerHTML = previous*10 + "%";
    }

    
    function goHome() {
        let loading = document.querySelector(".loading-screen");
        let page = document.querySelector(".page");

        loading.style.display = "none";
        page.style.display = "initial";
    }
    //#endregion

});