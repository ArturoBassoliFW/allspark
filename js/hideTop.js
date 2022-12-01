tornaSu = document.getElementById("tornaSu");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        tornaSu.className = "tornaSu tornaSuShow"
    } else {
        tornaSu.className = "tornaSu tornaSuHide"
    }
};

window.addEventListener("scroll", myScrollFunc);