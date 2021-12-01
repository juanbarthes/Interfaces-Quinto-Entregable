document.addEventListener('DOMContentLoaded', init);

function init() {

    /**
     * Vars
     */
    let registerForm = document.querySelector("#register-form");
    let loading = document.querySelector("#loading-section");
    let btnRegister = document.querySelector("#register-submit");
    let passwordError = document.querySelector("#password-error-info");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");


    /**
     * Events
     */
     registerForm.addEventListener('submit', function (e) {
        if (!passwordError.classList.contains('hidden')) {
            passwordError.classList.add('hidden');
        }
        e.preventDefault();
        register(e);
    });


    /**
     * Functions 
     */


    function register(e) {
        btnLoading.disabled = true;
        email.disabled = true;
        password.disabled = true;
        loading.classList.remove('hidden');
        setTimeout(() => {
            console.log(email.value + " " + password.value);
            if (email.value == "test@test.com.ar" && password.value == "12345678") {
                loading.classList.add('hidden');
                window.location = 'feed.html';
            } else {
                loading.classList.add('hidden');
                email.disabled = false;
                password.disabled = false;
                btnLoading.disabled = false;
                email.value = "";
                password.value = "";
                passwordError.innerHTML = "Las credenciales no coinciden."
                passwordError.classList.remove('hidden');
            }
        }, 1000);
    }
    
}