"use strict";
document.addEventListener('DOMContentLoaded', loadMenu);

function loadMenu() {
    const WIDTH = 700;
    const HEIGHT = 500;
    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    let game;

    let logo = document.querySelector(".logo");
    logo.src = Util.logo;
    logo.addEventListener('load', function() {
        this.width = WIDTH * 1/4;
        this.height = WIDTH * 1/4;
    })

    //#region AVATAR LOAD BUTTON
    let btn_avatar = document.querySelectorAll(".load_avatar");
    btn_avatar.forEach(element => {
        element.addEventListener("click", inputListener);
    });

    function inputListener(e) {
        let input_image;
        if(e.target.id == "btnAvatar1") {
            input_image = document.querySelector("#avatar1");
        } else if (e.target.id == "btnAvatar2") {
            input_image = document.querySelector("#avatar2");
        }
        input_image.click();
        input_image.addEventListener("change", loadAvatar);
    }

        function loadAvatar(e) {
        let file = e.target.files.item(0);

        let reader = new FileReader();
        let player = e.target.id;
        
        reader.addEventListener('load', (e) => setAvatarPlayer1(e, player))
        reader.readAsDataURL(file);
    }

    function setAvatarPlayer1(e, player) {
        let path = e.target.result;
        let avatar = new Image();
        avatar.src = path;
        avatar.addEventListener('load', function() {
            if(player == "avatar1") {
                Util.avatarPlayer1 = this;
            } else if(player == "avatar2"){
                Util.avatarPlayer2 = this;
            }
        })
    }
    //#endregion

    //#region GAME START
    let start_btn = document.querySelector(".start");
    start_btn.addEventListener("click", startDefault);

    function startDefault() {
        let scene = document.querySelector(".scenes").value;
        if(game == null) {
            game = new Game(canvas, scene);
        } else if (game.finished) {
            game = new Game(canvas, scene)
        } else {
            game.finish(null);
        }
        game.scene = scene;
        game.start();
    }
    //#endregion
}