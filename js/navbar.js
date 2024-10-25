let menu = []

for (let item of navbarItems){
    menu.push( `
        <a class="navbaritems ${item.classExtra}" role="button" href="${item.href}">${item.icono} ${item.text}</a>
    `)
}

let mitad1 = document.querySelector(".mitad1").innerHTML += menu.slice(0, 5).join("");