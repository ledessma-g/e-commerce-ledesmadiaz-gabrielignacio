function toggleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementsByClassName('search-icon');

    if (searchInput) {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'block';
            searchInput.focus();
            searchIcon.style.display = 'none';
        } else {
            searchInput.value = '';
            filterAndDisplay();
            searchInput.style.display = 'none';
            searchIcon.style.display = 'inline';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
});

const inputSearch = document.getElementById("search-input");
const cardsContainer = document.querySelector(".contenedor-cards");
const filterCheckboxes = document.querySelectorAll(".filters input[type='checkbox']");


const fillCards = (items) => {
    cardsContainer.innerHTML = "";

    if (items.length === 0) {
        cardsContainer.innerHTML = `<p>No se encontraron resultados.</p>`;
        return;
    }

    items.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("card", producto.tipoDeCard);
        card.innerHTML = `
            <div class="etiqueta-div">${producto.spans}</div>
            <img class="imagenvinilo" src="${producto.imagen}" alt="${producto.title}">
            <img class="imagenvinilo-hover" src="${producto.imagenHover}" alt="${producto.title}">
            <h3 class="titulo-card">${producto.title}</h3>
            <p class="precio">
                <span class="non-price">${producto.precioNoOferta}</span> 
                <span class="exact-price">$${producto.precio}</span>
            </p>
            <p class="STOCK">STOCK: ${producto.stock}</p>
            <br>
            <a class="carrito" role="button" href="../html/producto.html?prod=${producto.id}">Ver más</a>
        `;
        cardsContainer.appendChild(card);
    });
};

const getSelectedFilters = () => {
    const selectedFilters = { type: [], artist: [] };

    filterCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            if (checkbox.id.includes("input")) {
                selectedFilters.type.push(checkbox.id.split("-")[0]);
            } else {
                selectedFilters.artist.push(checkbox.nextSibling.textContent.trim());
            }
        }
    });

    return selectedFilters;
};

function toggleSearch() {
    var input = document.querySelector(".search-input");
    if (input.style.display !== 'none' && input.style.display !== '') {
        input.value = ''; 
        input.style.display = 'none';
        filterCards()
    } else {
        input.style.display = 'block';
        input.focus();

    }
}

const filterCards = () => {
    const query = inputSearch.value.trim().toLowerCase();
    const selectedFilters = getSelectedFilters();

    let filtered = data.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(query);
        const matchesType = selectedFilters.type.length === 0 || selectedFilters.type.includes(item.tipoDeCard);

        return matchesSearch && matchesType;
    });

    fillCards(filtered);
};

inputSearch.addEventListener("input", filterCards);
filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterCards);
});

fillCards(data);


function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = ''; 
        filterAndDisplay();
    }
}

function toggleFilters() {
    var filterSection = document.querySelector('.filter-section');
    var filters = document.querySelector('.filters');
    
    if (filterSection) {
        if (filterSection.classList.contains('expanded')) {
            filterSection.classList.remove('expanded');
            filters.classList.remove('visible');
        } else {
            filterSection.classList.add('expanded');
            filters.classList.add('visible');
        }
    }
}

function toggleDropdown() {
    const element = document.querySelector('.dropdown-content-responsive');

    if (element) {
        if (window.getComputedStyle(element).display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}

function updateFilterCounter() {
    const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
    const filterCounter = document.querySelector('.filter-counter');
    
    let checkedCount = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    if (filterCounter) {
        if (checkedCount > 0) {
            filterCounter.style.display = 'inline';
            filterCounter.textContent = `${checkedCount}`;
        } else {
            filterCounter.style.display = 'none';
        }
    }
}

const quantityCounter = document.getElementById("quantity");
const quantity = localStorage.getItem("quantity");
if (quantity > 0){
    quantityCounter.style.display = "block";
    quantityCounter.innerText = quantity;
}
else{
    quantityCounter.style.display = "none";
}

document.querySelectorAll('.filters input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', updateFilterCounter);
});
