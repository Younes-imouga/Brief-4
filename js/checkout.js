        const topanier = JSON.parse(localStorage.getItem("topanier"))

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


        const submit = document.getElementById("place-order-button");
        // const errormsg = document.querySelectorAll(".error-message");
        const champs = document.querySelectorAll(".champ-obligatoire");


        function submiting() {
            submit.addEventListener("click", (elem) => {
                let count = 0;
                champs.forEach(champ => {
                    const parent1 = champ.parentNode;
                    const parent2 = parent1.parentNode;
                    const star = document.querySelectorAll(".star")
                    const errormsg = parent2.querySelector("p");
                    if (champ.value === "") {
                        errormsg.style.display = ("block");
                        errormsg.style.color = ("red");
                        star[count].style.display = ("inline");
                    }
                    else{
                        errormsg.style.display = ("none");
                        star[count].style.display = ("none");
                    }
                    count++;
                })
                for (let i = 0; i < star.length; i++) {
                    
                    
                }
            })
        }
        submiting();
        

        function clearpanier() {
            
        }

        function showerrormsg() {
            
        }



        