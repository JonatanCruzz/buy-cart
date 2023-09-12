async function getProducts() {
    const ls = window.localStorage;

    const products =  JSON.parse(ls.getItem('products')) || [
        {
            id: 1,
            name: "Camiseta de manga corta con cuello redondo",
            price: 10,
            image: "/assets/img/product1.png",
            category: "shirt",
            quantity: 5,
            description: "Esta camiseta básica presenta un corte regular y un cuello redondo clásico. Es ideal para el uso diario y se puede combinar con una amplia variedad de looks."
        },
        {
            id: 2,
            name: "Camiseta de manga larga con estampado gráfico",
            price: 15,
            image: "/assets/img/product2.png",
            category: "shirt",
            quantity: 3,
            description: "Perfecta para un look casual, esta camiseta de manga larga presenta un estampado gráfico llamativo en el pecho. Su ajuste regular y suave tejido de algodón la hacen cómoda y fácil de usar."
        },
        {
            id: 3,
            name: "Camiseta con detalle de encaje",
            price: 12,
            image: "/assets/img/product3.png",
            category: "shirt",
            quantity: 2,
            description: "Esta camiseta presenta un detalle de encaje en el escote y mangas. Su ajuste regular y tela suave la hacen cómoda y fácil de usar para cualquier ocasión."
        },
        {
            id: 4,
            name: "Camiseta de tirantes con espalda cruzada",
            price: 8,
            image: "/assets/img/product4.png",
            category: "shirt",
            quantity: 10,
            description: "Con un toque de estilo femenino, esta camiseta de tirantes presenta una espalda cruzada con detalle de encaje. El ajuste es regular y la tela suave y cómoda."
        },
        {
            id: 5,
            name: "Camiseta con hombros descubiertos",
            price: 12,
            image: "/assets/img/product5.png",
            category: "shirt",
            quantity: 6,
            description: "Con un toque femenino y coqueto, esta camiseta presenta hombros descubiertos y un ajuste regular. Su tela suave y transpirable la hace ideal para los días calurosos."
        },
        {
            id: 6,
            name: "Camiseta con cuello alto y manga larga",
            price: 18,
            image: "/assets/img/product6.png",
            category: "shirt",
            quantity: 4,
            description: "Esta camiseta de manga larga presenta un cuello alto y ajuste regular. Es ideal para un look elegante y cómodo."
        },
        {
            id: 7,
            name: "Camiseta con cuello en V y manga corta",
            price: 9,
            image: "/assets/img/product7.png",
            category: "shirt",
            quantity: 8,
            description: "Esta camiseta clásica presenta un corte regular, cuello en V y mangas cortas. Es fácil de usar y combinar con diferentes looks."
        },
        {
            id: 8,
            name: "Hoddie con estampado de leopardo",
            price: 20,
            image: "/assets/img/product8.png",
            category: "hoddie",
            quantity: 8,
            description: "Este hoddie presenta un estampado de leopardo y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y cómodo."
        },
        {
            id: 9,
            name: "Hoddie con cremallera",
            price: 25,
            image: "/assets/img/product9.png",
            category: "hoddie",
            quantity: 10,
            description: "Este hoddie presenta una cremallera frontal y bolsillos laterales. Está hecho de una mezcla de algodón y poliéster para mayor comodidad y durabilidad."
        },
        {
            id: 10,
            name: "Hoddie con capucha y cordón ajustable",
            price: 30,
            image: "/assets/img/product10.png",
            category: "hoddie",
            quantity: 6,
            description: "Este hoddie presenta una capucha con cordón ajustable y un corte holgado para mayor comodidad. Está hecho de una mezcla suave de algodón y poliéster."
        },
        {
            id: 11,
            name: "Hoddie con estampado de marca",
            price: 35,
            image: "/assets/img/product11.png",
            category: "hoddie",
            quantity: 4,
            description: "Este hoddie presenta un estampado de marca en la parte delantera y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y moderno."
        },
        {
            id: 12,
            name: "Hoddie con cierre de botones",
            price: 40,
            image: "/assets/img/product12.png",
            category: "hoddie",
            quantity: 3,
            description: "Este hoddie presenta un cierre de botones en la parte delantera y bolsillos laterales. Está hecho de una mezcla suave de algodón y poliéster para mayor comodidad y durabilidad."
        },
    ];

    try {

        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        return response;

    } catch (error) {

        this.logger.error(error);

    }
}

export default getProducts;