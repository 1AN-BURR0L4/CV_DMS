const sortSelect = document.getElementById("sort");
const container = document.getElementById("cards-container");

sortSelect.addEventListener("change", () => {
    const cards = Array.from(container.querySelectorAll(".card-index"));

    cards.sort((a, b) => {
        const nameA = a.dataset.name.toLowerCase();
        const nameB = b.dataset.name.toLowerCase();

        if (sortSelect.value === "az") {
            return nameA.localeCompare(nameB);
        } else if (sortSelect.value === "za") {
            return nameB.localeCompare(nameA);
        }
    });

    cards.forEach(card => container.appendChild(card));
});