document.addEventListener("DOMContentLoaded", () => {
    const cityGrid = document.getElementById("city-grid");
    const btnCity = document.getElementById("btn-city");
    const btnBuild = document.getElementById("btn-build");
    const btnResources = document.getElementById("btn-resources");
    const constructionSection = document.getElementById("construction");
    const resourcesSection = document.getElementById("resources");
    const buildingType = document.getElementById("building-type");
    const placeBuilding = document.getElementById("place-building");
    let selectedCell = null;

    // Ініціалізація міста (10x10)
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cityGrid.appendChild(cell);

        cell.addEventListener("click", () => {
            selectedCell = cell;
        });
    }

    // Перемикання розділів
    btnCity.addEventListener("click", () => {
        constructionSection.classList.add("hidden");
        resourcesSection.classList.add("hidden");
    });

    btnBuild.addEventListener("click", () => {
        constructionSection.classList.remove("hidden");
        resourcesSection.classList.add("hidden");
    });

    btnResources.addEventListener("click", () => {
        constructionSection.classList.add("hidden");
        resourcesSection.classList.remove("hidden");
    });

    // Додавання будівель
    placeBuilding.addEventListener("click", () => {
        if (selectedCell) {
            let type = buildingType.value;
            selectedCell.className = `cell ${type}`;
        }
    });
});
