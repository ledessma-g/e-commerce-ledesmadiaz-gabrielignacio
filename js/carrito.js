const carritoCardsContenedor = document.getElementById('carritoCardsContenedor');

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
                            <p class="card-text"><small class="text-muted">Precio: ${item.precio * item.quantity}</small></p>
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
    const cards = JSON.parse(localStorage.getItem('cart'))

    const newCards = cards.filter(card => )
    const index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        // Eliminar el producto del array `cart` y su cantidad correspondiente del array `quantity`
        cart.splice(index, 1);
        quantity.splice(index, 1);

        // Guardar los cambios en el almacenamiento local
        guardarCarrito();

        // Renderizar nuevamente el carrito
        renderizarCarrito();
    }
}

// Actualizar ambos arrays en localStorage
function guardarCarrito() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantity', JSON.stringify(quantity));
}

// Al cargar la página, asegúrate de sincronizar ambos arrays

let quantity = JSON.parse(localStorage.getItem('quantity')) || [];


document.addEventListener('DOMContentLoaded', renderizarCarrito);
