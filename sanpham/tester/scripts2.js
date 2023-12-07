const products = [
    { name: "Tailored Jeans", price: 19.99 },
    { name: "Skinny Jeans", price: 29.99 },
    { name: "Slim Fit Jeans", price: 39.99 },
    { name: "Straight Leg Jeans", price: 49.99 }
    // Add more products as needed
];

function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="/w3images/jeans1.jpg" alt="Denim Jeans" style="width:100%">
            <h1>${product.name}</h1>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button>Add to Cart</button></p>
        `;
        productContainer.appendChild(card);
    });
}

function searchProducts() {
    // Your search logic here
}

function sortProducts() {
    const sortBy = document.getElementById("sort-by").value;

    switch (sortBy) {
        case "asc":
            products.sort((a, b) => a.price - b.price);
            break;
        case "desc":
            products.sort((a, b) => b.price - a.price);
            break;
        default:
            // Do nothing for the default case
            break;
    }

    displayProducts();
}

// Initial display
displayProducts();