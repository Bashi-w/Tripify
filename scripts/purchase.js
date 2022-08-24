///

let btnDonate = document.getElementById("submit")
btnDonate.addEventListener("click", validate);


function validate(){
    //txtMessage.innerHTML = "Successfully Donated! \nThankyou for your donation";
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
    else{
        alert("Successfully Donated! \nThankyou for your donation");
    }
    
}



let txtOutput = document.getElementById("outputp");
let txtOrder = document.getElementById("output");

//add to cart buttons
/*const  addWoodenMask = document.getElementById("Wooden_mask");
const  addBatikSarong = document.getElementById("Batik_sarong");
const  addBatikSaree = document.getElementById("Batik_saree");
const  addBuddhaFigurine = document.getElementById("Buddha_figurine");
const  addElephantSouvenir = document.getElementById("Elephant_souvenir");
const  addBlueSapphireGem = document.getElementById("Blue_sapphire_gem");
const  addDilmahTea = document.getElementById("Dilmah_tea(200g)");
const  addLiptonCeylontaTea = document.getElementById("Lipton_Ceylonta_Tea(200g)");
const  addMackwoodsTea = document.getElementById("Mackwoods_Tea(200g)");
const  addTeaeliLooseLeafCaddy = document.getElementById("Teaeli_Loose_Leaf_Caddy(25g)");*/
const orderFavourites = document.getElementById("fav-order");
const currentOrder = document.getElementById("cOrder");

let order = [];
let cart = [];

let nodess = document.getElementsByClassName("cart");
for (let i = 0; i < nodess.length; i++) {

    let btnCart = document.getElementsByClassName("cart")[i];

    btnCart.addEventListener("click", addCart, true);
    function addCart(){
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

/*addWoodenMask.addEventListener("click", (event) => {
    event.preventDefault()
    const entry = {
        name: addWoodenMask.id,
        cost: addWoodenMask.value
    };
    order.push(entry);
    cart.push(entry);
    showOrder();
})

addTeaeliLooseLeafCaddy.addEventListener("click", (event) => {
    event.preventDefault()
    const entry = {
        name: addTeaeliLooseLeafCaddy.id,
        cost: addTeaeliLooseLeafCaddy.value
    };
    order.push(entry);
    cart.push(entry);
    showOrder();
})*/

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
    document.getElementById("cart-info").innerHTML = "";
    localStorage.removeItem("Loyalty points: ")
    localStorage.setItem("favourites", JSON.stringify(cart));
    localStorage.setItem("cart", JSON.stringify(order));
    console.log(localStorage)
    cart = []
    alert("Items Added to Favourites");

})

orderFavourites.addEventListener("click", () => {
    //order = [];
    //currentOrder.style.display = "block";
    document.getElementById("cart-info").innerHTML = ""
    document.getElementById("addfav-confirm").innerText = "";
    localStorage.removeItem("cart")
    cart.push(...JSON.parse(localStorage.getItem("favourites")));
    localStorage.setItem("order", JSON.stringify(order));
    showOrder();

})

let btnLoyalty = document.getElementById("loyalty");
btnLoyalty.addEventListener("click", checkLoyalty);
function checkLoyalty(){    
    document.getElementById("points").style.display = "block"
    let length = order.length;
    if (length > 3){
        let points = length*20;
        localStorage.setItem('Loyalty points: ', points)
        console.log(localStorage); //test -- it works!!
        document.getElementById("points").innerText = `Congratulations! \nYou have earned ${points} loyalty points!`;
    }           
    else{
        document.getElementById("points").innerText = `You have not earned any loyalty points`;
    } 
}