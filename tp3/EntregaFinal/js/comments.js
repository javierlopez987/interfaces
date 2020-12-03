document.addEventListener("DOMContentLoaded", function () {

    let inputs = document.querySelectorAll('.formulario .input');
    inputs.forEach(input => {
        input.addEventListener("change", function () {
            if (this.value.length >= 1) {
                this.nextElementSibling.classList.add('fijar');
            } else {
                this.nextElementSibling.classList.remove('fijar');
            }
        })
    });
})
