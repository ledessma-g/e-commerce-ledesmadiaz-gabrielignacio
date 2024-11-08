let menu = []

for (let item of navbarItems){
    menu.push( `
        <a class="navbaritems ${item.classExtra}" role="button" href="${item.href}">${item.icono} <span class="${item.classExtra}-text">${item.text}</span></a>
    `)
}

let mitad1 = document.querySelector(".mitad1").innerHTML += menu.slice(0, 5).join("");

const login0 = document.querySelector(".loginnavbardiv");
const navLoginButton = document.querySelector(".loginnavbardiv-text");

function updateNavButton() {
    const username = localStorage.getItem('username');
    if (username) {
        navLoginButton.innerText = "Cerrar sesión"; 
        login0.onclick = function (e) {
            e.preventDefault();  
            logout(); 
        };
    } else {
        navLoginButton.innerText = "Iniciar sesión"; 
        login0.onclick = function (e) {
            e.preventDefault();  
            window.location.href = "login.html"; 
        };
    }
}

updateNavButton();

function logout() {
    localStorage.removeItem('username');
    updateNavButton();
    window.location.href = "catalogo.html";
}