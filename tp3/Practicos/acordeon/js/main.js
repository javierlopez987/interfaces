document.addEventListener("DOMContentLoaded", function() {

    let btnToOpen = document.querySelector("button.closed");
    console.log(btnToOpen);
    btnToOpen.addEventListener("click", open);

    function open() {
        let content = document.querySelector(".content");
        content.classList.toggle("opened");
    }
})