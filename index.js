function search() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var cards = document.getElementsByClassName('card');

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var title = card.querySelector('.titulo-card');
        var price = card.querySelector('.precio');
        var txtTitle = title.textContent || title.innerText;
        var txtPrice = price.textContent || price.innerText;

        if (txtTitle.toUpperCase().indexOf(filter) > -1 || txtPrice.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }

    if (filter === '' && input.style.display === 'none') {
        input.value = '';
        search();
    }

    search()
}

function toggleSearch() {
    var input = document.querySelector(".search-input");
    if (input.style.display !== 'none' && input.style.display !== '') {
        input.value = ''; 
        input.style.display = 'none';
    } else {
        input.style.display = 'block';
        input.focus();
    }
}

function filterCards() {
    let billieeilish = document.getElementById('artista1').checked;
    let lanadelrey = document.getElementById('artista2').checked;
    let ethelcain = document.getElementById('artista3').checked;
    let stvincent = document.getElementById('artista4').checked;
    let phoebebridgers = document.getElementById('artista5').checked;
    let fionaapple = document.getElementById('artista6').checked;
    let kendricklamar = document.getElementById('artista7').checked;
    let karajackson = document.getElementById('artista8').checked;
    let articmonkeys = document.getElementById('artista9').checked;

    var vinilosChecked = document.getElementById('vinilos-input').checked;
    var cdsChecked = document.getElementById('cds-input').checked;
    var cassettesChecked = document.getElementById('cassettes-input').checked;

    let cards = document.getElementsByClassName('card');

    let anyArtistCheckboxChecked = billieeilish || lanadelrey || ethelcain || stvincent || phoebebridgers || fionaapple || kendricklamar || karajackson || articmonkeys;

    let anyProductCheckboxChecked = vinilosChecked || cdsChecked || cassettesChecked;

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let titulocard = card.getElementsByClassName('titulo-card')[0];
        let cardTitle = titulocard ? titulocard.textContent.trim().toUpperCase() : '';

        let isVinilo = card.classList.contains('vinyl');
        let isCd = card.classList.contains('cds');
        let isCassette = card.classList.contains('cassettes');

        let isVisible = 
            (anyArtistCheckboxChecked ? 
                (billieeilish && cardTitle.includes('BILLIE EILISH')) ||
                (lanadelrey && cardTitle.includes('LANA DEL REY')) ||
                (ethelcain && cardTitle.includes('ETHEL CAIN')) ||
                (stvincent && cardTitle.includes('ST. VINCENT')) ||
                (phoebebridgers && cardTitle.includes('PHOEBE BRIDGERS')) ||
                (fionaapple && cardTitle.includes('FIONA APPLE')) ||
                (kendricklamar && cardTitle.includes('KENDRICK LAMAR')) ||
                (karajackson && cardTitle.includes('KARA JACKSON')) ||
                (articmonkeys && cardTitle.includes('ARTIC MONKEYS'))
            : true) &&
            (anyProductCheckboxChecked ? 
                (vinilosChecked && isVinilo) ||
                (cdsChecked && isCd) ||
                (cassettesChecked && isCassette)
            : true);

        card.style.display = isVisible ? '' : 'none';
    }
}

function toggleFilters() {
    var filterSection = document.querySelector('.filter-section');
    var filters = document.getElementById('filters');
    
    if (filterSection.classList.contains('expanded')) {
        filterSection.classList.remove('expanded');
        filters.classList.remove('visible');
    } else {
        filterSection.classList.add('expanded');
        filters.classList.add('visible');
    }
}

function toggleDropdown() {
    const element = document.querySelector('.dropdown-content-responsive');

    if (window.getComputedStyle(element).display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function updateFilterCounter() {
    const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
    const filterCounter = document.getElementById('filter-counter');
    
    let checkedCount = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    if (checkedCount > 0) {
        filterCounter.style.display = 'inline';
        filterCounter.textContent = `${checkedCount}`;
    } else {
        filterCounter.style.display = 'none';
    }
}

let changeupdate = document.querySelectorAll('.filters input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', updateFilterCounter);
});
