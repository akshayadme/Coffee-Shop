let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".navbar").style.top = "0";
        } else {
            document.querySelector(".navbar").style.top = "-100px";
            document.querySelector(".navbar").style.backgroundColor = "white";
        }
        prevScrollpos = currentScrollPos;
    }