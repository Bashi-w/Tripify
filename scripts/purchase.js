let btnDonate = document.getElementById("submit")
btnDonate.addEventListener("click", validate);

//donation form validation
function validate(){
    let name = document.forms.donationForm.name.value;
    let email = document.forms.donationForm.email.value;
    let cardname = document.forms.donationForm.cardname.value;
    let cardnum = document.forms.donationForm.cardnum.value;
    
    let cvv = document.forms.donationForm.cvv.value;
    if (name == "") {
        alert("Please enter your name.");
        return false;
    }
    else if (email == "") {
       alert("Please enter your email address.");
        return false;
    }
    else if (cardname == ""){
        alert("Please enter the Cardholder name.");
        return false;
    }
    else if (cvv == ""){
        alert("Please enter the CVV.");
        return false;
    }
    else if (cardnum == ""){
        alert("Please enter the Card number.");
        return false;
    }
    else{
        alert("Successfully Donated! \nThankyou for your donation");
    }
    
}

const txtOutput = document.getElementById("outputp");
const txtOrder = document.getElementById("output");
const txtPoints = document.getElementById("points");
const txtCart = document.getElementById("cart-info");

//empty arrays to store items
let order = [];
let cart = [];

let nodess = document.getElementsByClassName("cart");
for (let i = 0; i < nodess.length; i++) {

    let btnCart = document.getElementsByClassName("cart")[i];

    btnCart.addEventListener("click", addCart, true);
    function addCart(){
        txtOrder.innerText = "";
        txtPoints.innerText = "";
        btnCart.textContent = "ADDED TO CART"
        btnCart.style.backgroundColor = 'green'
        event.preventDefault()
        const entry = {
            name: btnCart.id,
            cost: btnCart.value
        };
        order.push(entry);
        cart.push(entry);
        showCart();
    }
}


function showOrder() {   
    let output =  "";    
    for (let i = 0; i < order.length; i++) {
        output += order[i].name + "\t" + order[i].cost + "<br>"
    }
    
    txtOrder.innerHTML = output
    
}

function showCart() {
    document.getElementById("cart").style.display = "block";
    let output2 =  "";
    for (let i = 0; i < cart.length; i++) {
        output2 += cart[i].name +"\t\t\t"+ cart[i].cost + "<br>"
    }
    document.getElementById("cart-info").innerHTML = output2;
}

//add to favourites
const btnAddFav = document .getElementById("addfav");
btnAddFav.addEventListener("click", () => {
    txtCart.innerHTML = "";
    localStorage.removeItem("Loyalty points: ")
    localStorage.setItem("favourites", JSON.stringify(cart));
    localStorage.setItem("cart", JSON.stringify(order));
    console.log(localStorage)
    cart = []
    alert("Items Added to Favourites");

})

//order favourites
const orderFavourites = document.getElementById("fav-order");
orderFavourites.addEventListener("click", () => {
    txtCart.innerHTML = "";
    localStorage.removeItem("cart")
    cart.push(...JSON.parse(localStorage.getItem("favourites")));
    localStorage.setItem("order", JSON.stringify(order));
    showOrder();

})

//check loyalty
let btnLoyalty = document.getElementById("loyalty");
btnLoyalty.addEventListener("click", checkLoyalty);
function checkLoyalty(){    
    txtPoints.style.display = "block"
    let length = order.length;
    if (length > 3){
        let points = length*20;
        localStorage.setItem('Loyalty points: ', points)
        console.log(localStorage);
        txtPoints.innerText = `Congratulations! \nYou have earned ${points} loyalty points!`;
    }           
    else{
        txtPoints.innerText = `You have not earned any loyalty points`;
    } 
}