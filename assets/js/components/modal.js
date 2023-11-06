function modal(db) {
    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector(".modal__image");
    const modalTitle = document.querySelector(".modal__title");
    const modalPrice = document.querySelector(".modal__price");
    const modalDescription = document.querySelector(".modal__description");
    const modalCloseButton = document.querySelector(".modal__close");

    function showModal(product) {
        modalImage.setAttribute("src", product.image);
        modalTitle.textContent = product.name;
        modalPrice.textContent = `$${product.price}`;
        modalDescription.textContent = product.description;

        modal.classList.add("show--modal");
    }

    function hideModal() {
        modal.classList.remove("show--modal");
    }

    modalCloseButton.addEventListener("click", hideModal);

    const productsContainer = document.querySelector(".products__container");

    productsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("show-modal")) {
            const productId = +e.target.getAttribute("data-id");
            const product = db.find((product) => product.id === productId);

            if (product) {
                showModal(product);
            }
        }
    });
}

export default modal;
