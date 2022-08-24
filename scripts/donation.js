///delete this
const txtMessage = document.getElementById("message")
const btnDonate = document.getElementById("submit");
btnDonate.addEventListener("click", validate);

function validate(){
    //txtMessage.innerHTML = "Successfully Donated! \nThankyou for your donation";
    let name = document.forms.donationForm.name.value;
    let email = document.forms.donationForm.email.value;
    let cardname = document.forms.donationForm.cardname.value;
    let cardnum = document.forms.donationForm.cardnum.value;
    let cvv = document.forms.donationForm.cvv.value;
    let expiration = document.forms.donationForm.expiryDate.value;
    if (name == "") {
        window.alert("Please enter your name.");
        return false;
    }
    else if (email == "") {
        window.alert("Please enter your email address.");
        return false;
    }
    else if (cardname == ""){
        window.alert("Please enter the Cardholder name.");
        return false;
    }
    else if (cardnum == ""){
        window.alert("Please enter the Card number.");
        return false;
    }
    else if (cvv == ""){
        window.alert("Please enter the CVV.");
        return false;
    }
    else{
        alert("Successfully Donated! \nThankyou for your donation");
    }
    
}

let nodess = document.getElementsByClassName("cart");
 //empty array to store favorites
let order = [];
let prices = [];

for (let i = 0; i < nodess.length; i++) {

    let btnCart = document.getElementsByClassName("cart")[i];

    btnCart.addEventListener("click", addCart, true);
    function addCart(){
        btnCart.textContent = "ADDED TO CART"
        btnCart.style.backgroundColor = 'green'
        // order.push(btnCart.value);
        // console.log(order)
        // prices.push(btnCart.id);
        // console.log(prices)

        const entry={
            item: btnCart.value,
            price: btnCart.id
        };
        order.push(entry);
        displayOrder();
        //document.getElementById("order").innerHTML = order[i];
        


        
        //function to remove item from cart
        /*btnCart.addEventListener("click", removeCart, true);
        function removeCart(){ 
            let target = btnCart.value;
            let i = 0;
            while (i < order.length) {
                if (order[i] === target) {
                    order.splice(i, 1);
                } 
                else {
                    ++i;
                }
            }
            btnCart.textContent = "ADD TO CART"

            let targetprice = btnCart.id;
            while (i< prices.length){
                if (prices[i] === targetprice) {
                    prices.splice(i, 1);
                } 
                else {
                    ++i;
                }
            }
        }*/
        btnCart.removeEventListener("click",addCart, true );
    }
}

let btnAddFav = document.getElementById("addfav");
btnAddFav.addEventListener("click", addFavourite);
function addFavourite(){
    localStorage.clear();
    localStorage.setItem("Favourites", JSON.stringify(order))

    //localStorage.setItem("Favourites", JSON.stringify(order));
    console.log(localStorage);
    document.getElementById("favs").style.display = "block";
    //order = []; //this removes order display in current order =(
}

function displayOrder() {
    
    for (let i = 0; i<order.length;i++){
        document.getElementById("cart").style.display = "block"
        let output = order[i].item + order[i].price
        document.getElementById("cart").innerHTML = output
    }
}








let btnOrder = document.getElementById("fav-order");
btnOrder.addEventListener("click", addOrder);
function addOrder(){
    console.log(order);
    document.getElementById("cOrder").style.display = "block";
    document.getElementById("order").innerHTML = order.map(i => `<li>${i}</li>`).join('');

    //let orderOutput=JSON.stringify(localStorage.getItem('Favourites'));
    //document.getElementById("order").innerHTML = orderOutput;

    

    let total = 0;
    console.log(total);
    console.log(prices)
    for (let i = 0; i < prices.length; i++) {
        total = total + parseFloat(prices[i]);
        console.log(total);
    }
    /*for(let i=0;i<order.length;i++){
        document.getElementById("order").value+=order[i].item+"\t"+order[i].price+"\n";
    }*/

    document.getElementById("cost").innerText = total.toFixed(2);


            /*let text = favourites.forEach(element => {
                document.getElementById("order").innerHTML = element;
                console.log(element);
            });*/
            /*let text = "<ul>";
            for (let i = 0; i < length; i++) {
            text += "<li>" + favourites[i] + "</li>";
            }
            text += "</ul>";

            document.getElementById("order").innerText = text;*/
        }

let btnLoyalty = document.getElementById("loyalty");
btnLoyalty.addEventListener("click", checkLoyalty);
function checkLoyalty(){
    document.getElementById("points").style.display = "block";           
    let length = order.length;
    if (length > 3){
        let points = length*20;
        localStorage.clear();
        localStorage.setItem('Loyalty points: ', points)
        console.log(localStorage); //test -- it works!!
        document.getElementById("points").innerText = `Congratulations! \nYou have earned ${points} loyalty points!`;
        //document.getElementById("points").style.width = "90%"; 
    }           
    else{
        document.getElementById("points").innerText = `You have not earned any loyalty points`;
    } 
}
        
