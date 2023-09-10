import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";

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

//TO DO:
/* 
1. Entregar la maquetación y la lógica vista en los videos (listo)
2. Animaciones (listo)
3. Realizar el loading (listo)
4. Realizar el darkmode de la pagina (pendiente)
5. Un modal con información del producto (y funcionalidad) (pendiente)
6. Validar el stock de los productos (pendiente)
7. Persistencia con localStorage (pendiente)
*/