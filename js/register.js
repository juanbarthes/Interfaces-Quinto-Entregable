document.addEventListener('DOMContentLoaded', init);

function init() {

    /**
     * Vars
     */
    let registerForm = document.querySelector("#register-form");
    let loading = document.querySelector("#loading-section");
    let btnRegister = document.querySelector("#register-submit");
    let emailError = document.querySelector("#email-error");
    let passwordError = document.querySelector("#password-error");
    let email = document.querySelector("#email");
    let registerError = document.querySelector("#register-error");
    let password = document.querySelector("#password");
    let passwordRepeat = document.querySelector("#password-repeat");
    let passwordRepeatError = document.querySelector("#password-repeat-error");
    let genero = document.querySelector("#radio-section");


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
        genero.disabled = true;
        btnRegister.disabled = true;
        email.disabled = true;
        password.disabled = true;
        loading.classList.remove('hidden');
        setTimeout(() => {
            if (email.value == "test@test.com.ar") {
                loading.classList.add('hidden');
                emailError.innerHTML = "Este correo ya está en uso.";
                emailError.classList.remove("hidden");
                btnRegister.disabled = false;
                email.disabled = false;
                password.disabled = false;
            } else {
                if (password.value != passwordRepeat.value) {
                    loading.classList.add('hidden');
                    passwordRepeatError.innerHTML = "Las contraseñas no coinciden.";
                    passwordRepeatError.classList.remove("hidden");
                    btnRegister.disabled = false;
                    email.disabled = false;
                    password.disabled = false;
                } else {
                    email.disabled = false;
                    password.disabled = false;
                    btnRegister.disabled = false;
                    email.value = "";
                    password.value = "";
                    registerError.innerHTML = "Cuenta creada satisfactoriamente."
                    registerError.classList.remove('hidden');
                    setTimeout(() => {
                        window.location = 'feed.html';
                    }, 2000);
                }
            }
        }, 1000);
    }

}