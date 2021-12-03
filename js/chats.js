document.addEventListener("DOMContentLoaded", init);

function init() {
    "use strict";

    setTimeout(() => {
        document.querySelector("#loading-label").classList.add("hidden");
        document.querySelector("#sticky-top").classList.add("sticky-top");
    }, 1000);
}