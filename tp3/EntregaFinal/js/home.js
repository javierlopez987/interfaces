document.addEventListener("DOMContentLoaded", function () {
    
    document.addEventListener("scroll", doSth);
    let wrappers = document.querySelectorAll(".left, .center, .right");
    
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
    }


})