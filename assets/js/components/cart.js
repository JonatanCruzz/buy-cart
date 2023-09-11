function cart(db, printProducts) {
    let cart = [];
    //Elementos del DOM
    const productsDOM = document.querySelector(".products__container");
    const notifyDOM = document.querySelector(".notify");
    const cartDOM = document.querySelector(".cart__body");
    const countDOM = document.querySelector(".cart__count--item");
    const totalDOM = document.querySelector(".cart__total--item");
    const checkoutDOM = document.querySelector(".btn--buy");

    //Funciones
    function printCart() {
        let htmlCart = '';

        if (cart.length === 0) {
            htmlCart += `
                <div class="cart__empty">
                    <i class="bx bx-cart"></i>
                    <p class="cart__empty--text">No hay productos en el carrito</p>
                </div>
            `
            notifyDOM.classList.remove('show--notify');

        } else {
            for (let item of cart) {
                const productFinded = db.find(product => product.id === item.id);
                htmlCart += `
                    <article class="article">
                    <div class="article__image">
                        <img src="${productFinded.image}" alt="${productFinded.name}">
                    </div>
                    <div class="article__content">
                        <h3 class="article__title">${productFinded.name}</h3>
                        <span class="article__price">$${productFinded.price}</span>
                        <div class="article__quantity">
                            <button type="button" class="article__quantity-btn article--minus" data-id="${item.id}">
                                <i class='bx bx-minus'></i>
                            </button>
                            <span class="article__quantity-text">${item.quantity}</span>
                            <button type="button" class="article__quantity-btn article--plus" data-id="${item.id}">
                                <i class='bx bx-plus'></i>
                            </button>
                        </div>
                        <button type="button" class="article__btn remove-from-cart" data-id="${item.id}">
                            <i class='bx bx-trash'></i>
                        </button>
                    </div>
                </article>
                    `
            }
            notifyDOM.classList.add('show--notify');
        }

        cartDOM.innerHTML = htmlCart;
        notifyDOM.innerHTML = showItemsCount();
        countDOM.innerHTML = showItemsCount();
        totalDOM.innerHTML = showTotal();

    }

    function addToCart(id, quantity = 1) {
        const itemFinded = cart.find(item => item.id === id);
        const product = db.find(product => product.id === id);

        if (itemFinded) {
            const totalQuantity = itemFinded.quantity + quantity;
            if (checkStock(id, totalQuantity)) {
                itemFinded.quantity = totalQuantity;
            } else {
                window.alert('No hay stock suficiente');
            }
        } else {
            if (checkStock(id, quantity)) {
                const newItem = { ...product, quantity };
                cart.push(newItem);
            } else {
                window.alert('No hay stock suficiente');
            }
        }

        printCart();
    }

    function removeFromCart(id, quantity = 1) {
        const itemFinded = cart.find(item => item.id === id);

        const result = itemFinded.quantity - quantity;

        if (result > 0) {
            itemFinded.quantity -= quantity;
        } else {
            cart = cart.filter(item => item.id !== id);
        }

        printCart();
    }

    function deleteFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        printCart();
    }

    function showItemsCount() {
        let suma = 0;

        for (let item of cart) {
            suma += item.quantity;
        }

        return suma;
    }

    function showTotal() {
        let total = 0;

        for (let item of cart) {
            const productFinded = db.find(product => product.id === item.id);
            total += productFinded.price * item.quantity;
        }

        return total;
    }

    function checkout() {
        for (let item of cart) {
            const productFinded = db.find(product => product.id === item.id);
            productFinded.quantity -= item.quantity;
        }

        cart = [];
        printCart();
        printProducts();
        window.alert('Gracias por su compra')
    }

    function checkStock(id, quantity) {
        const productFinded = db.find(product => product.id === id);

        return productFinded.quantity >= quantity;
    }

    printCart()

    //Eventos
    productsDOM.addEventListener("click", function (e) {
        if (e.target.closest(".add--to--cart")) {
            const id = +e.target.closest(".add--to--cart").dataset.id;
            addToCart(id);
        }
    });

    cartDOM.addEventListener("click", function (e) {
        if (e.target.closest(".article--plus")) {
            const id = +e.target.closest(".article--plus").dataset.id;
            addToCart(id);
        } else if (e.target.closest(".article--minus")) {
            const id = +e.target.closest(".article--minus").dataset.id;
            removeFromCart(id);
        } else if (e.target.closest(".remove-from-cart")) {
            const id = +e.target.closest(".remove-from-cart").dataset.id;
            deleteFromCart(id);
        }
    });

    checkoutDOM.addEventListener("click", function () {
        checkout();
    });
}

export default cart;