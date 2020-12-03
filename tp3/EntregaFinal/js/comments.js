document.addEventListener("DOMContentLoaded", function () {

    //#region Form inputs
    let inputs = document.querySelectorAll('.formulario .input');
    inputs.forEach(input => {
        input.addEventListener("change", function () {
            if (this.value.length >= 1) {
                this.classList.add('validado');
                input.classList.remove("no-validado");
            } else {
                this.classList.remove('validado');
            }
        })
    });
    //#endregion

    let character = document.querySelector(".character-selector");
    let form = document.querySelector(".formulario");

    //#region Animacion entrada de componentes
    setTimeout(() => showIn(character), 3500);
    setTimeout(() => showIn(form), 3500);

    function showIn(elem) {
        if(elem.classList.contains("enviado")) {
            elem.classList.remove("enviado");
        }
        elem.classList.add("appear");
    }
    //#endregion

    //#region Form submit button
    let summit = document.querySelector(".submit");
    summit.addEventListener("click", send);

    function send(e) {
        e.preventDefault();
        let validatedInputs = 0;
        inputs.forEach(input => {
            if(input.value.length >= 1) {
                validatedInputs++;
            } else {
                input.classList.remove("validado");
                input.classList.add("no-validado");
            }
        });

        if(validatedInputs == 3) {
            this.parentElement.classList.add("enviado");
            this.parentElement.classList.remove("appear");
            console.log(this.parentElement.previousElementSibling);
            this.parentElement.previousElementSibling.classList.add("comentable");
            inputs.forEach(input => {
                input.value = "";
                input.classList.remove("validado");
            });
        }
    }
    //#endregion
})
