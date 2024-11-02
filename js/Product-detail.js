// JS FOR PRODUCT DETAIL

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

    mainimg.src = productData.image;

    for (let i = 0; i < smallimg.length; i++) {
        smallimg[i].src = productData.image;
    }

    target.textContent = `Home/ ${productData.category}`;

    title.textContent = productData.name;

    price.textContent = `${productData.price}$`;

    detail.textContent = productData.Description;

    const topanier = JSON.parse(localStorage.getItem('topanier')) || [];

    function counting() {

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


    const addbtn = document.getElementById("addbtn");
    const quantitybtn = document.getElementById("quantitybtn");
    let array = {...productData};

    addbtn.addEventListener("click", addtopanier);
    quantitybtn.addEventListener("change", updatequantity);

    function updatequantity() {
        array.quantity = quantitybtn.value;
    }

    function addtopanier() {
        updatequantity();

        let inpanier = false;
        let index = -1;

        for (let i = 0; i < topanier.length; i++) {
            if (topanier[i].name === array.name) {
                inpanier = true;
                index = i;
                break;
            }
        }

        if (inpanier) {
            let sum = Number(topanier[index].quantity) + Number(array.quantity);
            topanier[index].quantity = sum;
        } else {
            topanier.push({...array});
        }
        console.log(topanier)
        localStorage.setItem('topanier', JSON.stringify(topanier));
        counting(); 
    }