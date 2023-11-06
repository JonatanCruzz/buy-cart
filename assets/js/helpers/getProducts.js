async function getProducts() {
    const ls = window.localStorage;

    const products = JSON.parse(ls.getItem('products')) || [
        {
            id: 1,
            name: "Short sleeve t-shirt with round neck",
            price: 10,
            image: "/assets/img/product1.png",
            category: "shirt",
            quantity: 5,
            description: "This basic tee features a regular fit and classic crew neck. It's ideal for everyday wear and can be paired with a wide variety of looks."
        },
        {
            id: 2,
            name: "Long sleeve t-shirt with graphic print",
            price: 15,
            image: "/assets/img/product2.png",
            category: "shirt",
            quantity: 3,
            description: "Perfect for a casual look, this long sleeve tee features an eye-catching graphic print on the chest. Its regular fit and soft cotton fabric make it comfortable and easy to wear."
        },
        {
            id: 3,
            name: "T-shirt with lace detail",
            price: 12,
            image: "/assets/img/product3.png",
            category: "shirt",
            quantity: 2,
            description: "This top features a lace detail at the neckline and sleeves. Its regular fit and soft fabric make it comfortable and easy to wear for any occasion."
        },
        {
            id: 4,
            name: "Cross back tank top",
            price: 8,
            image: "/assets/img/product4.png",
            category: "shirt",
            quantity: 10,
            description: "With a touch of feminine flair, this tank top features a crisscross back with lace-up detail. The fit is regular and the fabric soft and comfortable."
        },
        {
            id: 5,
            name: "Off shoulder t-shirt",
            price: 12,
            image: "/assets/img/product5.png",
            category: "shirt",
            quantity: 6,
            description: "With a flirty, feminine touch, this top features bare shoulders and a regular fit. Its soft, breathable fabric makes it ideal for hot days."
        },
        {
            id: 6,
            name: "Long sleeve turtleneck t-shirt",
            price: 18,
            image: "/assets/img/product6.png",
            category: "shirt",
            quantity: 4,
            description: "This long sleeve tee features a high neck and regular fit. It's ideal for a stylish and comfortable look."
        },
        {
            id: 7,
            name: "V-neck short sleeve t-shirt",
            price: 9,
            image: "/assets/img/product7.png",
            category: "shirt",
            quantity: 8,
            description: "This classic tee features a regular fit, V-neck and short sleeves. It's easy to wear and combine with different looks."
        },
        {
            id: 8,
            name: "Leopard print Hoddie",
            price: 20,
            image: "/assets/img/product8.png",
            category: "hoddie",
            quantity: 8,
            description: "This hoddie features a leopard print and is made of a soft cotton/poly blend. It's ideal for a casual and comfortable look."
        },
        {
            id: 9,
            name: "Hoddie with zipper",
            price: 25,
            image: "/assets/img/product9.png",
            category: "hoddie",
            quantity: 10,
            description: "This hoddie features a front zipper and side pockets. It's made of a cotton/polyester blend for comfort and durability."
        },
        {
            id: 10,
            name: "Hoddie with hood and drawstring",
            price: 30,
            image: "/assets/img/product10.png",
            category: "hoddie",
            quantity: 6,
            description: "This hoddie features an adjustable drawstring hood and a loose fit for comfort. It's made from a soft blend of cotton and polyester."
        },
        {
            id: 11,
            name: "Hoddie with brand print",
            price: 35,
            image: "/assets/img/product11.png",
            category: "hoddie",
            quantity: 4,
            description: "This hoddie features a branded print on the front and is made from a soft cotton/poly blend. It's ideal for a casual, modern look."
        },
        {
            id: 12,
            name: "Hoddie with button closure",
            price: 40,
            image: "/assets/img/product12.png",
            category: "hoddie",
            quantity: 3,
            description: "This hoddie features a front button closure and side pockets. It's made of a soft cotton/poly blend for comfort and durability."
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