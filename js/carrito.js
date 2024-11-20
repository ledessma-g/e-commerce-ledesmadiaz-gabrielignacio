const carritoCardsContenedor = document.getElementById('carritoCardsContenedor');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

let quantity = JSON.parse(localStorage.getItem('quantity')) || 0;

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
    actualizarCantidad();
});

function renderizarCarrito() {
    console.log('Renderizando carrito:', cart);

    if (cart.length === 0) {
        carritoCardsContenedor.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    carritoCardsContenedor.innerHTML = cart.map(item => `
        <div class="card mb-5">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.imagen}" class="img-fluid rounded-start" alt="${item.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <div>
                            <p class="card-text"><small class="text-muted">Precio: $${item.precio * item.quantity}</small></p>
                            <p class="card-text"><small class="text-muted">Cantidad: ${item.quantity}</small></p>
                            <button class="btn btn-danger" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function eliminarDelCarrito(id) {
    console.log(`Eliminando producto con id: ${id}`);
    
    cart = cart.filter(item => item.id !== id);

    guardarCarrito();

    renderizarCarrito();

    actualizarCantidad();

    calcularTotal();
}

function guardarCarrito() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantity', quantity);
}

function actualizarCantidad() {
    quantity = cart.reduce((acumulado, item) => acumulado + item.quantity, 0);

    localStorage.setItem('quantity', quantity);

    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) {
        quantityTag.innerText = quantity;
    }

    console.log(`Cantidad total actualizada: ${quantity}`);
}

function calcularTotal(carrito) {
    const cartTotalElement = document.querySelector("#cart-total");

    if (!carrito || carrito.length === 0) {
        cartTotalElement.innerText = "$0";
        return;
    }

    const total = carrito.reduce(
        (acumulado, item) => acumulado + item.precio * item.quantity,
        0
    );

    cartTotalElement.innerText = `$${total.toFixed(2)}`;
}

calcularTotal(JSON.parse(localStorage.getItem("cart")));

function clearCart(){
    let quantityTag = document.querySelector("#quantity")
    quantityTag.innerText = "0"
    localStorage.setItem("cart", JSON.stringify([]))
    renderizarCarrito([])
    calcularTotal(0)
}

const clearButton = document.querySelector("#btn-danger");
if (clearButton) {
    clearButton.addEventListener("click", clearCart);
}
