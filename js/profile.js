document.addEventListener("DOMContentLoaded", initScript);

function initScript() {
    /**
     * Variables
     */
    let postsIconClassName = "far fa-newspaper card-icon";
    let postsIconActiveClassName = "fas fa-newspaper card-icon";
    let moreInfoIconClassName = "far fa-address-card card-icon";
    let moreInfoIconActiveClassName = "fas fa-address-card card-icon"
    let postsIcon = document.querySelector("#posts-icon");
    let postSpan = document.querySelector("#posts-span");
    let posts = document.querySelector(".posts");
    let moreInfoIcon = document.querySelector("#more-info-icon");
    let moreInfoSpan = document.querySelector("#more-info-span");
    let moreInfo = document.querySelector(".more-info");
    let activeSection = postsIcon.id;

    setTimeout(() => {
        document.querySelector("#loading-label").classList.add("hidden");
        document.querySelector("#sticky-top").classList.add("sticky-top");
    }, 1000);

    /**
     * Eventos 
     */
    postsIcon.addEventListener("click", (e) => {
        switchSection(e.target)
    });

    postSpan.addEventListener("click", (e) => {
        switchSection(e.target.parentNode.querySelector("i"))
    });

    moreInfoIcon.addEventListener("click", (e) => {
        switchSection(e.target)
    });

    moreInfoSpan.addEventListener("click", (e) => {
        switchSection(e.target.parentNode.querySelector("i"))
    });

    /**
     * Funciones
     */

    function switchSection(target) {
        if (target.id != activeSection) {
            posts.classList.toggle("invisible");
            moreInfo.classList.toggle("invisible");
            switchIcon(target.className);
            activeSection = target.id;
        }
    }

    function switchIcon(className) {
        switch (className) {
            case postsIconClassName:
                postsIcon.className = postsIconActiveClassName;
                moreInfoIcon.className = moreInfoIconClassName;
                break;
            case postsIconActiveClassName:
                postsIcon.className = postsIconClassName;
                moreInfoIcon.className = moreInfoIconActiveClassName;
                break;
            case moreInfoIconClassName:
                moreInfoIcon.className = moreInfoIconActiveClassName;
                postsIcon.className = postsIconClassName;
                break;
            case moreInfoIconActiveClassName:
                moreInfoIcon.className = moreInfoIconClassName;
                postsIcon.className = postsIconActiveClassName;
                break;
            default:
                break;
        }
    }
}