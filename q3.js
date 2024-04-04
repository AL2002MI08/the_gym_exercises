function sortProducts(products) {
    // Sorting the products array based on their prices in ascending order
    return products.sort((a, b) => a.price - b.price);
}

// Example usage:
const products = [
    { name: "Product A", price: 20 },
    { name: "Product B", price: 10 },
    { name: "Product C", price: 30 }
];

console.log(sortProducts(products));
