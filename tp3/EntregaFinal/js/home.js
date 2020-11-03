document.addEventListener("DOMContentLoaded", function () {
    
    document.addEventListener("scroll", doSth);
    let wrappers = document.querySelectorAll(".flip-cards .left,.flip-cards .center,.flip-cards .right");
    
    function doSth(e) {
        let appearanceGate = 450;
        // console.log(e);
        // console.log(this.scrollingElement.scrollTop);
        wrappers.forEach(element => {
            if((element.offsetTop - window.scrollY) < appearanceGate && (element.offsetTop - window.scrollY) > 0) {
                // console.log("Element Offset " + element.offsetTop);
                element.classList.add("appear");
            } else {
                element.classList.remove("appear");
            }
        });

        let scrollIcon = document.querySelector(".scroll");
        const HEIGHT_SCROLL_HIDDEN = 1000;
        if(window.scrollY > HEIGHT_SCROLL_HIDDEN) {
            scrollIcon.classList.add("invisible");
            console.log(document.querySelector(".scroll"));
        } else {
            scrollIcon.classList.remove("invisible");
        }
    }


})