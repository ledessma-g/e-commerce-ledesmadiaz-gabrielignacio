const data = [{
  "id": 1,
  "spans": '<span class="etiqueta novedad">NOVEDAD</span><span class="etiqueta genero">ALT-POP</span>',
  "title": "BILLIE EILISH - HIT ME HARD AND SOFT - STANDARD VINYL",
  "precio": "$29.99",
  "precioNoOferta": "",
  "stock": 46,
  "imagen": "vinyl.img/HMHAS-standard.webp",
  "imagenHover": "covers/HMHAS.webp",
  "tipoDeCard": "vinilos",
  "descripcion": "Vinilo estándar de Billie Eilish con un sonido envolvente y cuidado. Un esencial para los fans del alt-pop.",
  "tracks": 12,
  "duracion": "42:36"
}, {
  "id": 2,
  "spans": '<span class="etiqueta novedad">NOVEDAD</span><span class="etiqueta oferta">OFERTA</span><span class="etiqueta exclusiva">EDICIÓN EXCLUSIVA</span><span class="etiqueta limitada">EDICIÓN LIMITADA</span><span class="etiqueta genero">ALT-POP</span>',
  "title": "BILLIE EILISH - HIT ME HARD AND SOFT - BLUE CASSETTE",
  "precio": "$7.69",
  "precioNoOferta": "$9.99",
  "stock": 17,
  "imagen": "cassette.img/HMHAS-blue.webp",
  "imagenHover": "covers/HMHAS.webp",
  "tipoDeCard": "cassettes",
  "descripcion": "Cassette azul de edición limitada que incluye los tracks de HIT ME HARD AND SOFT de Billie Eilish en un formato retro.",
  "tracks": 12,
  "duracion": "42:36"
}, {
  "id": 3,
  "spans": '<span class="etiqueta exclusiva">EDICIÓN EXCLUSIVA</span><span class="etiqueta genero">ALT-POP</span>',
  "title": "LANA DEL REY - OCEAN BLVD - TARGET EXCLUSIVE VINYL",
  "precio": "$43.16",
  "precioNoOferta": "",
  "stock": 6,
  "imagen": "vinyl.img/OCEANBLVD-targetexclusive.png",
  "imagenHover": "covers/OCEANBLVD-TARGET.jpeg",
  "tipoDeCard": "vinilos",
  "descripcion": "Vinilo exclusivo de Lana Del Rey, solo disponible en Target, con un sonido nostálgico y envolvente.",
  "tracks": 16,
  "duracion": "60:05"
}, {
  "id": 4,
  "spans": '<span class="etiqueta exclusiva">EDICIÓN EXCLUSIVA</span><span class="etiqueta limitada">EDICIÓN LIMITADA</span><span class="etiqueta genero">ALT-POP</span>',
  "title": "LANA DEL REY - OCEAN BLVD - ALTERNATIVE COVER CD",
  "precio": "$40.59",
  "precioNoOferta": "$36.89",
  "stock": 41,
  "imagen": "cd.img/OCEANBLVD-altcover.webp",
  "imagenHover": "covers/OCEANBLVD-ALT1.webp",
  "tipoDeCard": "cds",
  "descripcion": "Edición en CD con portada alternativa del último álbum de Lana Del Rey.",
  "tracks": 16,
  "duracion": "60:05"
}, {
  "id": 5,
  "spans": '<span class="etiqueta oferta">OFERTA</span><span class="etiqueta genero">SLOWCORE</span>',
  "title": "ETHEL CAIN - PREACHER'S DAUGHTER - STANDARD VINYL",
  "precio": "$8.70",
  "precioNoOferta": "$15.59",
  "stock": 45,
  "imagen": "vinyl.img/PREACHERSDAUGTHER-standard.png",
  "imagenHover": "covers/PREACHERSDAUGHTER.jpeg",
  "tipoDeCard": "vinilos",
  "descripcion": "Vinilo estándar del aclamado álbum de Ethel Cain, mezclando slowcore y narrativa emotiva.",
  "tracks": 13,
  "duracion": "75:32"
}, {
  "id": 6,
  "spans": '<span class="etiqueta genero">SLOWCORE</span>',
  "title": "ETHEL CAIN - PREACHER'S DAUGHTER - CD",
  "precio": "$11.90",
  "precioNoOferta": "",
  "stock": 51,
  "imagen": "cd.img/PREACHERSDAUGTHER.png",
  "imagenHover": "covers/PREACHERSDAUGHTER.jpeg",
  "tipoDeCard": "cds",
  "descripcion": "CD del debut conceptual de Ethel Cain, un viaje profundo a través de paisajes sonoros.",
  "tracks": 13,
  "duracion": "75:32"
}, {
  "id": 7,
  "spans": '<span class="etiqueta oferta">OFERTA</span><span class="etiqueta genero">DREAM POP / SLOWCORE</span>',
  "title": "ETHEL CAIN - INBRED - PHYSICAL EDITION (CD)",
  "precio": "$9.35",
  "precioNoOferta": "$13.99",
  "stock": 36,
  "imagen": "cd.img/INBRED.png",
  "imagenHover": "covers/INBRED.jpg",
  "tipoDeCard": "cds",
  "descripcion": "Edición física de 'Inbred' en CD, combinando dream pop y slowcore con una estética única.",
  "tracks": 7,
  "duracion": "33:21"
}, {
  "id": 8,
  "spans": '<span class="etiqueta oferta">OFERTA</span><span class="etiqueta genero">DREAM POP / SLOWCORE</span>',
  "title": "ETHEL CAIN - INBRED - PHYSICAL EDITION (CASSETTE)",
  "precio": "$5.61",
  "precioNoOferta": "$9.99",
  "stock": 9,
  "imagen": "cassette.img/INBRED.png",
  "imagenHover": "covers/INBRED.jpg",
  "tipoDeCard": "cassettes",
  "descripcion": "Cassette físico de 'Inbred', perfecto para los fans de la estética retro.",
  "tracks": 7,
  "duracion": "33:21"
}, {
  "id": 9,
  "spans": '<span class="etiqueta oferta">OFERTA</span><span class="etiqueta genero">INDIE FOLK</span>',
  "title": "PHOEBE BRIDGERS - PUNISHER - VINYL",
  "precio": "$38.09",
  "precioNoOferta": "$42.50",
  "stock": 25,
  "imagen": "vinyl.img/PUNISHER.png",
  "imagenHover": "covers/PUNISHER.jpg",
  "tipoDeCard": "vinilos",
  "descripcion": "Vinilo de 'Punisher' de Phoebe Bridgers, una joya del indie folk contemporáneo.",
  "tracks": 11,
  "duracion": "40:40"
}, {
  "id": 10,
  "spans": '<span class="etiqueta oferta">OFERTA</span><span class="etiqueta genero">INDIE FOLK</span>',
  "title": "PHOEBE BRIDGERS - PUNISHER - CASSETTE",
  "precio": "$29.15",
  "precioNoOferta": "$40.30",
  "stock": 14,
  "imagen": "cassette.img/PUNISHER.png",
  "imagenHover": "covers/PUNISHER.jpg",
  "tipoDeCard": "cassettes",
  "descripcion": "Cassette de 'Punisher', con el encanto especial del formato físico.",
  "tracks": 11,
  "duracion": "40:40"
}];

const navbarItems = [{
  "name": "Home",
  "text": "Inicio",
  "icono": '<img width="24" height="24" src="https://img.icons8.com/material-rounded/24/home.png" alt="home"/>',
  "href": "../inicio.html",
  "classExtra": "homenavbardiv"
}, {
  "name": "About Us",
  "text": "Nosotros",
  "icono": '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/among-us.png" alt="among-us"/>',
  "href": "aboutus.html",
  "classExtra": "aboutusnavbardiv"
}, {
  "name": "Cart",
  "text": "",
  "icono": '<img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/shopping-cart--v1.png" alt="shopping-cart--v1"/>',
  "href": "carrito.html",
  "classExtra": "cart"
}, {
  "name": "Login",
  "text": "Iniciar sesión",
  "icono": '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/login-rounded-right.png" alt="login-rounded-right"/>',
  "href": "#",
  "classExtra": "loginnavbardiv"
}

]