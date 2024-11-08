const rightUser = "gabo";
const rightPassword = "contraseña";

const loginForm = document.querySelector(".login-form");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");

const errorMessage = document.querySelector("#error-msg");

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = inputUsername.value;
    const contrasena = inputPassword.value;

    if (username === rightUser && contrasena === rightPassword) {
        localStorage.setItem('username', username);
        
        window.location.href = 'catalogo.html';
    } else {
        inputUsername.value = '';
        inputPassword.value = '';

        errorMessage.style.display = "block"
    }
});

const username = localStorage.getItem('username');

if (username) {
    window.location.href = 'catalogo.html';
}