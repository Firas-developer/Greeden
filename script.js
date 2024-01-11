//selcting items
var menu = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var exit = document.getElementById("exit")
var search = document.getElementById("search")
var container = document.getElementById("PlantContainer")

//Function to add and exit navbar
function showNavbar(){
    sidenav.style.right="0"
}
function exitNavbar(){
    sidenav.style.right= "-50%"
}

//Creating Js for Product Items
var ProductItems = container.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var enteredValue = this.value.toUpperCase();
    for (var i = 0; i < ProductItems.length; i++) {
        var productname = ProductItems[i].querySelector("h1").textContent.toUpperCase();
        if (productname.indexOf(enteredValue) < 0) {
            ProductItems[i].style.display = "none";
        } else {
            ProductItems[i].style.display = "block";
        }
    }
});