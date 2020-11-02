document.addEventListener("DOMContentLoaded", function() {

    //#region CALENDAR JS
    let btnToOpen = document.querySelectorAll("button.closed");
    btnToOpen.forEach(element => {
        element.addEventListener("click", open);
    });

    function open() {
        console.log(this);
        this.classList.toggle("closed");
        let content = this.parentElement.parentElement.nextElementSibling;
        content.classList.toggle("opened");
        let linkEvent = this.parentElement.parentElement.nextElementSibling.nextElementSibling;
        linkEvent.classList.toggle("show");
        linkEvent.firstElementChild.firstElementChild.innerHTML = "Ver Foto";
        linkEvent.addEventListener("click", showEvent);
        let btnQuitFoto = linkEvent.nextElementSibling.firstElementChild;
        btnQuitFoto.addEventListener("click", hide);
    }
    
    function showEvent() {
        this.nextElementSibling.classList.toggle("show");
    }

    function hide() {
        this.parentElement.classList.toggle("show");
    }
    //#endregion

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
        location.replace("./home.html");
    }
    //#endregion
})