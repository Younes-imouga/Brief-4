// JS for product

// The array that contains the products
const products = [
    { name: "Red Printed T-shirt", rating: 4, price: 50, category: "T-shirt",size: "sm" , quantity: 1, image: "Images/product-1.jpg", Description: "This classic red printed T-shirt is a must-have for any casual wardrobe. Made from soft, breathable fabric, it ensures comfort while making a bold statement." },
    { name: "Running Trainers", rating: 5, price: 70, category: "shoes", size: "sm", quantity: 1, image: "Images/product-2.jpg", Description: "Lightweight running trainers with excellent grip and support. Perfect for long runs and daily workouts, these trainers feature breathable materials and cushioning for added comfort." },
    { name: "Stretch Fit Jeans", rating: 3, price: 50, category: "pants", size: "sm", quantity: 1, image: "Images/product-3.jpg", Description: "Comfortable, stretch-fit jeans designed for all-day wear. The versatile style makes them suitable for both casual and semi-formal occasions." },
    { name: "Graphic Cotton Tee", rating: 4, price: 28, category: "T-shirt", size: "sm", quantity: 1, image: "Images/product-4.jpg", Description: "Soft, breathable cotton T-shirt featuring a unique graphic print. Ideal for casual outings or layering under jackets." },
    { name: "Leather Boots", rating: 2, price: 85, category: "shoes", size: "sm", quantity: 1, image: "Images/product-5.jpg", Description: "Durable leather boots with a rugged sole, ideal for all terrains. These boots offer both style and functionality for outdoor adventures." },
    { name: "Graphic Print T-Shirt", rating: 4, price: 20, category: "T-shirt", size: "sm", quantity: 1, image: "Images/product-6.jpg", Description: "Soft cotton t-shirt with a unique graphic design on the front. A great addition to any casual wardrobe." },
    { name: "Athletic Crew Socks", rating: 5, price: 12, category: "shoes", size: "sm", quantity: 1, image: "Images/product-7.jpg", Description: "High-quality crew socks with moisture-wicking fabric for ultimate comfort during workouts. Designed to keep your feet dry and comfortable." },
    { name: "Analog Leather Watch", rating: 3, price: 120, category: "watch", size: "sm", quantity: 1, image: "Images/product-8.jpg", Description: "Elegant analog watch with a leather strap and minimalist dial. Perfect for adding a touch of sophistication to any outfit." },
    { name: "Luxury Gold Watch", rating: 5, price: 150, category: "watch", size: "sm", quantity: 1, image: "Images/product-9.jpg", Description: "A statement piece with a gold-plated finish and a sleek design. Ideal for special occasions or as a luxury gift." },
    { name: "Classic Leather Sneakers", rating: 4, price: 55, category: "shoes", size: "sm", quantity: 1, image: "Images/product-10.jpg", Description: "Sleek leather sneakers with a cushioned insole, perfect for a casual or semi-formal look. Versatile enough to pair with various outfits." },
    { name: "Casual Sneakers", rating: 2, price: 60, category: "shoes", size: "sm", quantity: 1, image: "Images/product-11.jpg", Description: "Comfortable sneakers perfect for daily wear. Lightweight design ensures ease of movement throughout the day." },
    { name: "Vintage Denim Pants", rating: 1, price: 45, category: "pants", size: "sm", quantity: 1, image: "Images/product-12.jpg", Description: "Stylish high-rise denim with a vintage wash. A trendy choice that combines comfort with a retro aesthetic." },
];




//sorting system start here
const sort = document.getElementById("sort");
const categorysort = document.getElementById("categorysort");
const pricerange = document.getElementById("price-range");
const pricevalue = document.getElementById("range-value");

pricerange.addEventListener("input", function () {
    pricevalue.textContent = `$${pricerange.value}`;
    
});

function filterProducts() {
    const selectedCategory = categorysort.value;
    const maxPrice = Number(pricerange.value);
    
    return products.filter(product => {
        const categoryMatch = selectedCategory === "Default" || product.category === selectedCategory;
        const priceMatch = product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });
    
}

categorysort.addEventListener("change", updateDisplay);
pricerange.addEventListener("input", updateDisplay);
sort.addEventListener("change", updateDisplay);

function updateDisplay() {
    let filteredProducts = filterProducts();

    if (sort.value === "sortbypopularity") {
        filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(filteredProducts);
    
}

//sorting system ends


// display items system

function displayProducts(products) {
    const container = document.querySelector(".row1");
    container.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("col-4");
        productDiv.classList.add("add");

        const button = document.createElement("button");
        button.classList.add("panier");
        button.textContent = "add to cart";
        productDiv.appendChild(button);

        const img = document.createElement("img");
        img.classList.add = "product-image";
        img.src = product.image;
        productDiv.appendChild(img);

        const productLink = document.createElement("a");
        productLink.classList.add("click");
        productLink.href = "product-detail.html";
        productDiv.appendChild(productLink);

        const name = document.createElement("h4");
        name.textContent = product.name;
        productLink.appendChild(name);
        productDiv.appendChild(productLink);

        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("rating");

        for (let i = 0; i < 5; i++) {
            const star = document.createElement("i");
            star.classList.add("fa", i < Math.floor(product.rating) ? "fa-star" : "fa-star-o");
            star.setAttribute("aria-hidden", "true");
            ratingDiv.appendChild(star);
        }
        productDiv.appendChild(ratingDiv);

        const price = document.createElement("p");
        price.textContent = `$${product.price.toFixed(2)}`;
        productDiv.appendChild(price);

        container.appendChild(productDiv);
        
    });
}


// Initial display of products
displayProducts(products);



// Add to panier

const container = document.querySelector(".row1"); 
let topanier = JSON.parse(localStorage.getItem('topanier')) || [];

container.addEventListener("click", function(event) {
    // Check if the clicked element is an add to cart button
    if (event.target.classList.contains("panier")) {
        const clickedparent = event.target.parentNode; // Get the parent div
        const title = clickedparent.querySelector('h4').textContent;

        // Check if the product is already in topanier
        let inpanier = false;
        let index = -1;

        for (let i = 0; i < topanier.length; i++) {
            if (topanier[i].name === title) {
                inpanier = true;
                index = i;
                break;
            }
        }

        if (inpanier) {
            topanier[index].quantity++;
        } else {
            const addedtopanier = products.find(product => product.name === title);

            if (addedtopanier) {
                topanier.push({ ...addedtopanier, quantity: 1 });
            } else {
                console.error("Product not found in products array for title:", title);
                return;
            }
        }

        localStorage.setItem('topanier', JSON.stringify(topanier));
    }
    counting();
});







const clickedLinks = document.querySelectorAll(".click");

clickedLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        // Prevent default behavior of the link
        event.preventDefault();
        
        // Get the parent element of the clicked link
        const clickedDiv = link.parentNode;

        // Find the product info based on the name in the h4
        let info = products.find(product => product.name === clickedDiv.querySelector("h4").textContent);

        // If info is found, you can use localStorage to save it for the next page
        if (info) {
            localStorage.setItem("productInfo", JSON.stringify(info));
            // Redirect to the product detail page
            window.location.href = "product-detail.html"; 
        } else {
            console.error("Product not found");
        }
    });
});


const productcounter = document.getElementById("product-counter");

function counting() {

    const topanier = JSON.parse(localStorage.getItem('topanier')) || [];
    const productcounter = document.getElementById("product-counter");
    const productcost = document.getElementById("total-money");
    
    let cost = 0;
    productcounter.textContent = topanier.length;
    for (let i = 0; i < topanier.length; i++) {
        cost += (Number(topanier[i].price)*Number(topanier[i].quantity));        
    }
    productcost.textContent = `$${Number(cost)}`;
}
counting();


// localStorage.clear();