document.addEventListener("DOMContentLoaded", function() {

    let btnToOpen = document.querySelectorAll("button.closed");
    btnToOpen.forEach(element => {
        element.addEventListener("click", open);
    });

    function open(e) {
        let content = e.target.parentElement.parentElement.nextElementSibling;
        content.classList.toggle("opened");
    }
})