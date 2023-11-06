import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";
import modal from "./components/modal.js";
import darkMode from "./components/darkMode.js"


/* UI Elements*/

/* Hide loader*/
loader();

/* Show menu*/
showMenu();

/* Show cart*/
showCart();
/* End of UI Elements*/

/* Products*/
const { db, printProducts } = products(await getProducts());


/* Cart */
cart(db, printProducts);

/* Modal */
modal(db);

/* Dark Mode*/
darkMode();

