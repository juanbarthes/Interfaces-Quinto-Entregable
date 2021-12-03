document.addEventListener("DOMContentLoaded", initScript);

function initScript() {

    setTimeout(() => {
        document.querySelector("#loading-label").classList.add("hidden");
        document.querySelector("#sticky-top").classList.add("sticky-top");
    }, 1000);

    /**
     * Variables
     */
    let resultList = document.querySelectorAll(".list-group-item");
    let followBtns = document.querySelectorAll(".post-control");

    let searchIcon = document.querySelector("#search-icon");
    let searchBar = document.querySelector("#search-bar");

    /**
     * Eventos
     */
    for (let index = 0; index < followBtns.length; index++) {
        let btn = followBtns[index];
        btn.addEventListener("click", (e) => {
            switchBtn(e.target) });
    }
    searchIcon.addEventListener("click", filterResults);

    /**
     * Funciones
     */
    function switchBtn(btn) {

        if (btn.textContent == "Seguir") {
            btn.textContent = "No seguir";
        } else {
            btn.textContent = "Seguir";
        }
        btn.classList.toggle("bg-danger");
    }

    function filterResults() {
        clearFilter();
        for (let index = 0; index < resultList.length; index++) {
            let resultItem = resultList[index];
            let h5 = resultItem.querySelector("h5").innerHTML;
            if (!h5.includes(searchBar.value)) {
                resultItem.classList.add("invisible");
            }
            
        }
    }

    function clearFilter() {
        for (let index = 0; index < resultList.length; index++) {
            let element = resultList[index];
            element.classList.remove("invisible");
            
        }
    }
}