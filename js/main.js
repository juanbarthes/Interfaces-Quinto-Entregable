document.addEventListener('DOMContentLoaded', init);

function init() {
    'use strict';

    let loading = document.querySelector("#loading-section");
    let btnLoading = document.querySelector("#login-submit");

    btnLoading.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("entro");
        login(e);
    });

    function login(e) {
        let email = document.querySelector("#email");
        let pwd = document.querySelector("#password");
        btnLoading.disabled = true;
        email.disabled = true;
        pwd.disabled = true;
        loading.classList.remove('hidden');
        setTimeout(() => {
            console.log(email.value + " " + pwd.value);
            loading.classList.add('hidden');
            email.disabled = false;
            pwd.disabled = false;
            btnLoading.disabled = false;
        }, 1000);
    }
}