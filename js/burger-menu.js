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