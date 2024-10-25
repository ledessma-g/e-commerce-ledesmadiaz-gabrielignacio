const main = document.querySelector("main")

let id = window.location.search.split("=")[1];

let producto = data.find((product) => product.id == id);

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
        <h1>${producto.title}</h1>
        <div class="descripcion">
          <p>${producto.descripcion}</p>
          <span>STOCK: ${producto.stock}</span>
          <span>TRACKS: ${producto.tracks}</span>
          <span>DURACIÓN: ${producto.duracion}</span>
          <div class="precio-div">
            <span class="non-price">${producto.precioNoOferta}</span> 
            <span class="exact-price">${producto.precio}</span>
          </div>
        </div>
        <a class="carrito" role="button">Agregar al carrito</a>
    </div>
</div>
`;

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

