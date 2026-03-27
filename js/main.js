const sortSelect = document.getElementById("sort");
const container = document.getElementById("grid-integrantes");

if (sortSelect && container) {
    sortSelect.addEventListener("change", () => {
        const cards = Array.from(container.querySelectorAll(".card-index"));

        cards.sort((a, b) => {
            const nameA = (a.dataset.name || a.querySelector("h3")?.textContent || "").toLowerCase();
            const nameB = (b.dataset.name || b.querySelector("h3")?.textContent || "").toLowerCase();

            if (sortSelect.value === "az") {
                return nameA.localeCompare(nameB);
            }

            if (sortSelect.value === "za") {
                return nameB.localeCompare(nameA);
            }

            return 0;
        });

        cards.forEach(card => container.appendChild(card));
    });
}