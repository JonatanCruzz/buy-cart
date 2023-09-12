function products(products) {
    const db = [...products];

    function printProducts() {
        const productsDOM = document.querySelector(".products__container");

        let htmlProducts = "";

        for (let product of db) {
            htmlProducts += `
            <article class="product">
            <div class="product__image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product__content">
                <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                    <i class='bx bx-cart-add'></i>
                </button>
                <span class="product__price">$${product.price}</span>
                <span class="product__stock">Disponibles: ${product.quantity}</span>
                <h3 class="product__title">${product.name}</h3>
                <button type="button" class="product__btn show-modal" data-id="${product.id}">
                    <i class='bx bx-info-circle'></i>
                </button>
            </div>
        </article>
            `;
        }

        productsDOM.innerHTML = htmlProducts;
    }

    printProducts();

    return {
        db,
        printProducts
    }
}

export default products;