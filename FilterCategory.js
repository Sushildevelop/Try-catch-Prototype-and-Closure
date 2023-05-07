function product(products) {
    return function(category) {
        return products.filter(function(item) {
            return item.category === category;

        });
    }
}

const products = [{ name: 'Shirt', category: "clothing" },
    { name: 'Pants', category: "clothing" },
    { name: 'Hat', category: "Accessories" },
    { name: 'Sunglasses', category: "Accessories" },
]

let clothingProducts = product(products)("clothing");

console.log(clothingProducts);