// JS for Single product detail

// Burger menu starts here
const togglebtn = document.getElementById("togglebtn");
const navlist = document.getElementById("nav-list");
const navigation = document.getElementById("nav");

togglebtn.onclick = function togglenav() {
    if (navigation.style.overflow === "hidden") {
        navigation.style.overflow = "visible";
        navlist.style.left = "0px";
    } else {
        navigation.style.overflow = "hidden";
        navlist.style.left = "-200px";
    }
};
// End

// The array that contains the products
const products = [
    { name: "Red Printed T-shirt", rating: 4, price: 50, category: "T-shirt", image: "Images/product-1.jpg" },
    { name: "Running Trainers", rating: 5, price: 70, category: "shoes", image: "Images/product-2.jpg", Description: "Lightweight running trainers with excellent grip and support"},
    { name: "Stretch Fit Jeans", rating: 3, price: 50, category: "pants", image: "Images/product-3.jpg", Description: "Comfortable, stretch-fit jeans designed for all-day wear"},
    { name: "Graphic Cotton Tee", rating: 4, price: 28, category: "T-shirt", image: "Images/product-4.jpg", Description: "Soft, breathable cotton T-shirt featuring a unique graphic print, perfect for a casual day out or layering"},
    { name: "Leather Boots", rating: 2, price: 85, category: "shoes", image: "Images/product-5.jpg", Description: "Durable leather boots with a rugged sole, ideal for all terrains"},
    { name: "Graphic Print T-Shirt", rating: 4, price: 20, category: "T-shirt", image: "Images/product-6.jpg", Description: "Soft cotton t-shirt with a unique graphic design on the front"},
    { name: "Athletic Crew Socks", rating: 5, price: 12, category: "shoes", image: "Images/product-7.jpg", Description: "High-quality crew socks with moisture-wicking fabric for ultimate comfort during workouts"},
    { name: "Analog Leather watch", rating: 3, price: 120, category: "watch", image: "Images/product-8.jpg", Description: "Elegant analog watch with a leather strap and minimalist dial"},
    { name: "Luxury Gold watch", rating: 5, price: 150, category: "watch", image: "Images/product-9.jpg", Description: "A statement piece with a gold-plated finish and a sleek design"},
    { name: "Classic Leather Sneakers", rating: 4, price: 55, category: "shoes", image: "Images/product-10.jpg", Description: "Sleek leather sneakers with a cushioned insole, perfect for a casual or semi-formal look"},
    { name: "Casual Sneakers", rating: 2, price: 60, category: "shoes", image: "Images/product-11.jpg", Description: "Comfortable sneakers perfect for daily wear"},
    { name: "Vintage Denim Pants", rating: 1, price: 45, category: "pants", image: "Images/product-12.jpg", Description: "Stylish high-rise denim with a vintage wash"},
];

// Get DOM elements
const sort = document.getElementById("sort");
const categorysort = document.getElementById("categorysort");
const pricesort = document.getElementById("pricesort");
const pricerange = document.getElementById("price-range");
const pricevalue = document.getElementById("range-value");

// Display the selected price value
pricerange.addEventListener("input", function () {
    pricevalue.textContent = `$${pricerange.value}`;
});

// Function to filter products based on category and price
function filterProducts() {
    const selectedCategory = categorysort.value;
    const maxPrice = Number(pricerange.value);
    
    return products.filter(product => {
        const categoryMatch = selectedCategory === "Default" || product.category === selectedCategory;
        const priceMatch = product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });
}

// Function to display products
function displayProducts(products) {
    const container = document.querySelector(".row1");
    container.innerHTML = ""; // Clear existing products

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("col-4");

        const productLink = document.createElement("a");
        productLink.href = "product-detail.html";

        const img = document.createElement("img");
        img.src = product.image;
        productLink.appendChild(img);

        const name = document.createElement("h4");
        name.textContent = product.name;
        productLink.appendChild(name);

        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("rating");

        for (let i = 0; i < 5; i++) {
            const star = document.createElement("i");
            star.classList.add("fa", i < Math.floor(product.rating) ? "fa-star" : "fa-star-o");
            star.setAttribute("aria-hidden", "true");
            ratingDiv.appendChild(star);
        }
        productLink.appendChild(ratingDiv);

        const price = document.createElement("p");
        price.textContent = `$${product.price.toFixed(2)}`;
        productLink.appendChild(price);

        productDiv.appendChild(productLink);
        container.appendChild(productDiv);
    });
}

// Event listeners for category, price, and sort options
categorysort.addEventListener("change", updateDisplay);
pricerange.addEventListener("input", updateDisplay);
sort.addEventListener("change", updateDisplay);

// Update display based on filters and sorting
function updateDisplay() {
    let filteredProducts = filterProducts();

    if (sort.value === "sortbypopularity") {
        filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(filteredProducts);
}

// Initial display of products
displayProducts(products);
