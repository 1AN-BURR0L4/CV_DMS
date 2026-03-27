const sortSelect = document.getElementById("sort");
const container = document.getElementById("grid-integrantes");

function ordenar() {
    const cards = Array.from(container.querySelectorAll(".card-index"));

    cards.sort((a, b) => {
        const nameA = (a.dataset.name || "").toLowerCase();
        const nameB = (b.dataset.name || "").toLowerCase();

        if (sortSelect.value === "az") {
            return nameA.localeCompare(nameB);
        }

        if (sortSelect.value === "za") {
            return nameB.localeCompare(nameA);
        }

        return 0;
    });

    cards.forEach(card => container.appendChild(card));
}

// Evento cuando cambias el select
sortSelect.addEventListener("change", ordenar);

// Ejecutar al cargar la página cambio
window.addEventListener("DOMContentLoaded", ordenar);