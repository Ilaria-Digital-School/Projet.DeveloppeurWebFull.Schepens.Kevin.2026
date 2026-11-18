class Prestation {
    constructor (nom, description, duree, prix) {
        this.nom = nom;
        this.description = description;
        this.duree = duree;
        this.prix = prix;
    }
}

function togglePrestation() {
    const toggle = document.querySelectorAll('.toggle_prestations');
    const container = document.querySelectorAll('.liste_prestations');

    console.log(toggle);
    console.log(container);

    for(let i=0; i<toggle.length; i++) {
        toggle[i].addEventListener("click", function () {
            let style = getComputedStyle(container[i]).display;
            if(style === "none") {
                container[i].style.display = "flex";
                toggle[i].textContent = "Réduire";
            } else {
                container[i].style.display = "none";
                toggle[i].textContent = "Développer";
            }
        });
    }
}

togglePrestation();