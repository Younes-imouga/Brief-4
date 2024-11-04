        let topanier = JSON.parse(localStorage.getItem("topanier"))

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
        console.log(champs)

        function submiting() {
            submit.addEventListener("click", (elem) => {
                let count = 0;
                let valid = 0;
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
                        valid++;
                    }
                    count++;
                })
                const countrysubmit = document.getElementById("country")
                const countryerror = document.getElementById("country-p")
                const countryspan = document.getElementById("country-l")
                const done = document.getElementById("done");
                if (countrysubmit.value === "default") {
                    countryerror.style.display = "block";
                    countryerror.style.color = ("red");
                    countryspan.style.display = "block";
                }
                else{
                    countryerror.style.display = "none";
                    countryspan.style.display = ("inline");
                    valid++;
                }
                if (valid == 9) {
                    clearpanier();
                    done.style.display = "block"
                }
            })
        }
        submiting();
        

        function clearpanier() {
            topanier = [];
            counting();
            localStorage.setItem("topanier" ,JSON.stringify(topanier))
        }

        function counting() {

            const productcounter = document.getElementById("product-counter");
            const productcost = document.getElementById("total-money");
            const productcost2 = document.getElementById("total-money2");
            
            let cost = 0;
            productcounter.textContent = topanier.length;
            for (let i = 0; i < topanier.length; i++) {
                cost += (Number(topanier[i].price)*Number(topanier[i].quantity));        
            }
            productcost.textContent = `$${Number(cost)}`;
            productcost2.textContent = `$${Number(cost)}`;
        }
        // counting();

        