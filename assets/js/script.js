const modal =
    document.querySelector("#modal");

const openBtn =
    document.querySelector("#openModal");

const closeBtn =
    document.querySelector("#closeModal");

/* otwieranie */

openBtn.addEventListener("click", () => {

    modal.classList.add("show");

});

/* zamykanie */

closeBtn.addEventListener("click", () => {

    modal.classList.remove("show");

});


/*dodatkowo zamykanie po kliknięciu poza modal*/
modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("show");

    }

});



const opis =
    document.querySelector("#opisGalerii");

document
    .querySelectorAll(".tor img")
    .forEach(img => {

        img.addEventListener("mouseenter", () => {

            opis.textContent =
                img.dataset.opis;

        });

    });
img.addEventListener("click", () => {

    opis.innerHTML = `

        <h3>${img.alt}</h3>

        <p>${img.dataset.opis}</p>

    `;

});