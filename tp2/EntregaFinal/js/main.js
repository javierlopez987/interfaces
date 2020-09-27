"use strict";
document.addEventListener('DOMContentLoaded', loadMenu);

function loadMenu() {
    const WIDTH = 700;
    const HEIGHT = 500;
    let canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    let game;
    let scenes = {
        beach: 1,
        river: 2
    }

    //#region SCENES
    let btn_scenes = document.querySelectorAll(".scenes");
    for (const btn of btn_scenes) {
        btn.addEventListener("click", setScene);
    }

    //TO-DO usar HTMLElement Select
    function setScene(e) {
        if(e.target.innerHTML == "Beach") {
            game = new Game(canvas, scenes.beach);
            game.start();
        } else if (e.target.innerHTML == "River") {
            game = new Game(canvas, scenes.river);
            game.start();
        }
    }
    //#endregion

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
    let restart_btn = document.querySelector(".restart");
    restart_btn.addEventListener("click", startDefault);

    function startDefault() {
        if(game == null) {
            game = new Game(canvas, scenes.river)
        }
        game.start();
    }
    //#endregion
}