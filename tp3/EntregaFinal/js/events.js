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
})