"use strict";
document.addEventListener('DOMContentLoaded', loadMenu);

function loadMenu() {
    const WIDTH = 650;
    const HEIGHT = 400;

    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    let game = new Game(canvas);
    /**
     * # CONFIGURATION
     * */
    //#region AVATAR LOAD BUTTON
    let btn_avatar = document.querySelectorAll(".load_avatar");
    btn_avatar.forEach(element => {
        element.addEventListener("click", inputListener);
    });

    function inputListener(e) {
        console.log(e.target.nextElementSibling.id);
        let input_image = document.querySelector(".input_image");
        input_image.click();
        input_image.addEventListener("change", loadAvatar);
    }

        function loadAvatar(e) {
        let file = e.target.files.item(0);

        let reader = new FileReader();
        let player = e.target.id;
        reader.addEventListener('load', (e) => setPlayer(e, player))
        reader.readAsDataURL(file);
    }

    function setPlayer(e, player) {
        let path = e.target.result;
        let avatar = new Image();
        avatar.src = path;
        avatar.addEventListener('load', function() {
            let newPlayer = new Player(player, this);
            game.addPlayer(newPlayer);
        })
    }
    //#endregion

    //#region GAME START
    let start_btn = document.querySelector(".start");
    start_btn.addEventListener("click", start);

    function start() {
        game.start();
    }
}