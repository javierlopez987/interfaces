document.addEventListener("DOMContentLoaded", function () {
    
    document.addEventListener("scroll", showIn);
    let wrappers = document.querySelectorAll(".flip-cards .left,.flip-cards .center,.flip-cards .right");
    
    function showIn() {
        let appearanceGate = 450;
        wrappers.forEach(element => {
            if((element.offsetTop - window.scrollY) < appearanceGate && (element.offsetTop - window.scrollY) > 0) {
                element.classList.add("appear");
            } else {
                element.classList.remove("appear");
            }
        });

        let scrollIcon = document.querySelector(".scroll");
        const HEIGHT_SCROLL_HIDDEN = 1000;
        if(window.scrollY > HEIGHT_SCROLL_HIDDEN) {
            scrollIcon.classList.add("invisible");
        } else {
            scrollIcon.classList.remove("invisible");
        }
    }

    let sliderBackward = document.querySelector(".slider.left");
    let sliderForward = document.querySelector(".slider.right");

    sliderBackward.addEventListener("click", slideBack);
    sliderForward.addEventListener("click", slideForward);

    let slides = document.querySelectorAll(".slides .wrapper");
    let slidesPointer = 0;

    function slideBack() {
        slides[slidesPointer].classList.remove("slideActive");
        slidesPointer--;
        console.log(slides);
        console.log(slidesPointer);
        if(slidesPointer < 0) {
            slidesPointer = slides.length - 1;
            console.log("entra el if")
            console.log(slides[slidesPointer]);
        }
        slides[slidesPointer].classList.add("slideActive");
    }

    function slideForward() {
        console.log(slides[slidesPointer]);
        slides[slidesPointer].classList.remove("slideActive");
        slidesPointer++;
        if(slidesPointer >= slides.length) {
            slidesPointer = 0;
        }
        slides[slidesPointer].classList.add("slideActive");
    }

})