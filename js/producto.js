const main = document.querySelector("main")
const title = document.querySelector("title")

let id = window.location.search.split("=")[1];

let producto = data.find((product) => product.id == id);

title.innerText = `${producto.title}`

main.innerHTML = `
<div class="contenedor-card-producto">
    <div class="imagen">
        <div class="etiqueta-div">
                ${producto.spans}
        </div> 
        <img id="img-alterna1" src="${producto.imagen}">
        <img id="img-alterna2" src="${producto.imagenHover}">
    </div>
    <div class="contenido">
        <h2>${producto.title}</h2>
        <div class="descripcion">
          <p>${producto.descripcion}</p>
          <span>STOCK: ${producto.stock}</span>
          <span>TRACKS: ${producto.tracks}</span>
          <span>DURACIÓN: ${producto.duracion}</span>
          <div class="precio-div">
            <span class="non-price">${producto.precioNoOferta}</span> 
            <span class="exact-price">$${producto.precio}</span>
          </div>
        </div>
        ${localStorage.getItem('username') ?
            `<div>
            <button class="button-contador-iz" type="button" onclick="decreaseItem(${producto.id})">-</button>
            <input type="number" id="cantidad-${producto.id}" class="input-cantidad" value="1" min="1" max="${producto.stock}" onchange="updateQuantity(${producto.id})"></input>
            <button class="button-contador-de" type="button" onclick="increaseItem(${producto.id})">+</button>
            </div>
            <button type="button" class="carrito" onclick="addItems(${producto.id})">Agregar al carrito</button>
              `
            :
            `<a href="login.html" class="carrito">Inicia sesión para comprar</a>`
          } 
        </div>
    </div>
</div>
`;

const input = document.getElementById(`cantidad-${id}`);

function increaseItem(id) {
  const product = data.find(product => product.id === id);

  if (product && typeof product.stock === "number") {
    const maxStock = product.stock;

    if (parseInt(input.value) < maxStock) {
      input.value = parseInt(input.value) + 1;
    }
  }
}

function decreaseItem(id) {
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function addItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const idProduct = Number(window.location.search.split("=")[1]);
  const quantityToAdd = Number(input.value) < 1 ? 1 : Number(input.value);
  input.value = quantityToAdd;

  const existingProductIndex = cart.findIndex(item => item.id === idProduct);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += quantityToAdd;
  } else {
    cart.push({ ...producto, id: idProduct, quantity: quantityToAdd });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  localStorage.setItem("quantity", quantity);

  const quantityTag = document.querySelector(".quantity");

  Toastify({
    text: `${producto.title} ha sido agregado al carrito.`,
    duration: 3000, 
    close: true, 
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
}).showToast();
}

function alternarImagenes() {
    const img1 = document.getElementById('img-alterna1');
    const img2 = document.getElementById('img-alterna2');

    if (img1.style.display === 'none') {
        img1.style.display = 'block';
        img2.style.display = 'none';
    } else {
        img1.style.display = 'none';
        img2.style.display = 'block';
    }
}

document.getElementById('img-alterna1').addEventListener('click', alternarImagenes);
document.getElementById('img-alterna2').addEventListener('click', alternarImagenes);

document.getElementById('img-alterna2').style.display = 'none';

