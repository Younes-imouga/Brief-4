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
