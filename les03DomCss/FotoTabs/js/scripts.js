document.addEventListener("DOMContentLoaded", function () {
    const filterTabs = document.querySelectorAll(".filter__tab");
    const fotos = document.querySelectorAll("#gallery figure");
    const numFound = document.querySelector("#numFound");

    function updateGallery(filter) {
        let count = 0;

        fotos.forEach(foto => {
            const filters = foto.getAttribute("data-filters");
            
            if (filter === "alle" || filters.includes(filter)) {
                foto.style.display = "block";
                count++;
            } else {
                foto.style.display = "none";
            }
        });

        numFound.textContent = count;
    }
    filterTabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();


            filterTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");


            const filter = this.getAttribute("data-filter");
            updateGallery(filter);
        });
    });

    updateGallery("alle");
});
