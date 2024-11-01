var ProductImg = document.getElementById("product-img");//larger image
var SmallImg = document.getElementsByClassName("small-img");//it returns list of 4 images having index 0,1,2,3 as we have 4 images with class name "small0-img" 

SmallImg[0].onclick = function()//when user click on first image or images at 0 index, it will display as ProdcutImg.src replace with clicked or SmallImg[0], so we get smallimg[0] in bigger form, similarly when click on smallimg[1], it will display in bigger picture and so on 
{
    ProductImg.src = SmallImg[0].src;   
}

SmallImg[1].onclick = function()
{
    ProductImg.src = SmallImg[1].src;   
}

SmallImg[2].onclick = function()
{
    ProductImg.src = SmallImg[2].src;   
}

SmallImg[3].onclick = function()
{
    ProductImg.src = SmallImg[3].src;   
}


// In product-detail.js or the relevant script for your product detail page
const productData = JSON.parse(localStorage.getItem("productInfo")) || [];

const mainimg = document.getElementById("product-img");
const smallimg = document.querySelectorAll(".small-img");
const target = document.getElementById("link-to-product");
const title = document.getElementById("title");
const price = document.getElementById("price");
const detail = document.getElementById("product-detail");

console.log(productData);
    
    mainimg.src = productData.image;

    for (let i = 0; i < smallimg.length; i++) {
        smallimg[i].src = productData.image;
    }

    target.textContent = `Home/ ${productData.category}`;

    title.textContent = productData.name;

    price.textContent = `${productData.price}$`;

    detail.textContent = productData.Description;
