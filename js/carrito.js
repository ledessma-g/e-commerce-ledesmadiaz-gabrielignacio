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
                            <p class="card-text"><small class="text-muted">Precio: $${(item.precio * item.quantity).toFixed(2)}</small></p>
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

    const quantityTag = document.querySelector(".quantity");
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
    localStorage.setItem("cart", JSON.stringify([]))
    renderizarCarrito()
    calcularTotal(0)
    carritoCardsContenedor.innerHTML = "<p>No hay productos en el carrito.</p>"
}

const clearButton = document.querySelector("#btn-danger");
if (clearButton) {
    clearButton.addEventListener("click", clearCart);
}



function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const user = localStorage.getItem("username");
  
    if (!cart || cart.length === 0) {
      Swal.fire({
        icon: "error", 
        title: "Carrito vacío",
        text: "No puedes realizar la compra porque el carrito está vacío.",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#06f",
      });
      return; 
    }
  
    const recurso = {
      user: user,
      items: cart,
    };
  
    fetch("https://673d09dd4db5a341d833d038.mockapi.io/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(recurso),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          icon: "success", 
          text: `Gracias por su compra, ${user}! Hemos registrado tu orden número #${data.id}`,
          confirmButtonText: "Okay",
          confirmButtonColor: "#06f",
        });

        clearCart();
      })
      .catch(() =>
        Swal.fire({
          icon: "error", 
          text: "Ups, hubo un problema. Por favor, inténtalo más tarde.",
          confirmButtonText: "Okay",
          confirmButtonColor: "#06f",
        })
      );
  }

let checkoutButton = document.querySelector("#btn-checkout")
if (checkoutButton){
    checkoutButton.addEventListener("click", checkout)
}