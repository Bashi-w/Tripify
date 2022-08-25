//constants
const txtLocalAdults = document.getElementById("local-adults");
const txtLocalChildren1 = document.getElementById("local-children1");
const txtLocalChildren2 = document.getElementById("local-children2");
const txtForeignAdults = document.getElementById("foreign-adults");
const txtForeignChildren1 = document.getElementById("foreign-children1");
const txtOutput = document.getElementById("overall-cost");
const txtCurrentOrder = document.getElementById("current-order");
const txtAnnualPass = document.getElementById("pass");
const txtFoodToken = document.getElementById("token");
const txtAnnualPassF = document.getElementById("passF");
const txtFoodTokenF = document.getElementById("tokenF");
const btnAdd = document.getElementById("add");
const btnPlace = document.getElementById("place");
btnAdd.addEventListener("click", addorder);
btnPlace.addEventListener("click", placeOrder);


//type of ticket
let tickets = document.querySelectorAll("input[name='ticket']");
for (let i = 0; i < tickets.length; i++) {
tickets[i].addEventListener("change", checkTicket, true);
}
function checkTicket() {
    if (this.value == "local") {  
        document.getElementById("tickettype1").style.backgroundColor = "rgb(142, 235, 142)";
        document.getElementById("tickettype2").style.backgroundColor = "transparent";
        document.getElementById("foreign-tickets").style.display = "none";
        document.getElementById("foreign-prices").style.display = "none";
        document.getElementById("local-tickets").style.display = "block";
        document.getElementById("local-prices").style.display = "block";
        document.getElementById("duration-foreign").style.display = "none";
        document.getElementById("duration-local").style.display = "block";
        document.getElementById("extrasF").style.display = "none";
        document.getElementById("extrasL").style.display = "flex";

    }
    else if (this.value =="foreigner") {
        document.getElementById("tickettype2").style.backgroundColor = "rgb(142, 235, 142)";
        document.getElementById("tickettype1").style.backgroundColor = "transparent";
        document.getElementById("foreign-tickets").style.display = "block";
        document.getElementById("foreign-prices").style.display = "block";
        document.getElementById("local-tickets").style.display = "none";
        document.getElementById("local-prices").style.display = "none";
        document.getElementById("duration-local").style.display = "none";
        document.getElementById("duration-foreign").style.display = "block";
        document.getElementById("extrasF").style.display = "flex";
        document.getElementById("extrasL").style.display = "none";
    }  
}

    
    
    
//onclick function to update costs with inputs simultaneously
function myFunction(){ 
    let cost = txtLocalAdults.value * 2500;
    document.getElementById("cost1").innerText = cost;
    document.getElementById("1").innerText = `Adult Passes(Local): ${txtLocalAdults.value}`;

    let cost2 = txtLocalChildren1.value * 1000;
    document.getElementById("cost2").innerText = cost2;
    document.getElementById("2").innerText = `Child Passes(Local): ${parseInt(txtLocalChildren1.value) + parseInt(txtLocalChildren2.value)}`;

    let cost3 = txtLocalChildren2.value * 500;
    document.getElementById("cost3").innerText = cost3;

    let cost4 = txtForeignAdults.value * 3000;
    document.getElementById("cost4").innerText = cost4;
    document.getElementById("3").innerText = `Adult Passes(Foreign): ${txtForeignAdults.value}`;

    let cost5 = txtForeignChildren1.value * 2500;
    document.getElementById("cost5").innerText = cost5;
    document.getElementById("4").innerText = `Child Passes(Foreign): ${txtForeignChildren1.value}`;

    let cost7 = txtAnnualPass.value * 5000;
    document.getElementById("cost7").innerText = cost7;

    let cost8 = txtFoodToken.value * 500;
    document.getElementById("cost8").innerText = cost8;

    let cost9 = txtAnnualPassF.value * 5000;
    document.getElementById("cost9").innerText = cost9;
    document.getElementById("5").innerText = `Annual Passes: ${parseInt(txtAnnualPass.value) + parseInt(txtAnnualPassF.value)}`;

    let cost10 = txtFoodTokenF.value * 500;
    document.getElementById("cost10").innerText = cost10;
    document.getElementById("6").innerText = `Food Tokens: ${parseInt(txtFoodToken.value) + parseInt(txtFoodTokenF.value)}`;

    let currentCost = txtLocalAdults.value*2500 + txtForeignAdults.value*3000 + txtForeignChildren1.value*2500 + txtLocalChildren1.value*1000 + txtLocalChildren2.value*500 + (parseInt(txtAnnualPass.value) + parseInt(txtAnnualPassF.value))*5000 + (parseInt(txtFoodToken.value) + parseInt(txtFoodTokenF.value))*500;

    document.getElementById("7").innerText = `Current Cost is ${currentCost} LKR`

}


//add to order button click
function addorder(){

    let optActivity = document.getElementById("activity");
    activity = optActivity.options[optActivity.selectedIndex].value;
    if (activity == 'none'){
        alert("Please select an activity")
    }
    
    const localAdults = txtLocalAdults.value;
    const foreignAdults = txtForeignAdults.value;
    const foreignChildren1 = txtForeignChildren1.value;
    const localChildren1 = txtLocalChildren1.value;
    const localChildren2 = txtLocalChildren2.value;
    const annualPass =txtAnnualPass.value;
    const foodToken = txtFoodToken.value;
    const annualPassF = txtAnnualPassF.value;
    const foodTokenF = txtFoodTokenF.value;

    
    let total = localAdults*2500 + foreignAdults*3000 + foreignChildren1*2500 + localChildren1*1000 + localChildren2*500 + (parseInt(annualPass) +parseInt(annualPassF))*5000 + (parseInt(foodToken) + parseInt(foodTokenF))*500 ;


    document.getElementsByClassName("a")[0].innerText = "No Current Orders";

    //making current order blank 
    const element = document.getElementById("order-container");
    let nodes = element.getElementsByClassName("b");
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].innerText = " ";
    }

   
    //ovrall order details
    document.getElementById("l1").innerText = localAdults;

    document.getElementById("l2").innerText = `${localAdults} x 2500`;

    document.getElementById("lc1").innerText = parseInt(localChildren1) + parseInt(localChildren2);

    document.getElementById("lc2").innerText = `${localChildren1} x 1000 + ${localChildren2} x 500`;

    document.getElementById("f1").innerText = foreignAdults;

    document.getElementById("f2").innerText = `${foreignAdults} x 3000`;

    document.getElementById("fc1").innerText = foreignChildren1;

    document.getElementById("fc2").innerText = `${foreignChildren1} x 2500`;

    document.getElementById("ap1").innerText =parseInt(annualPass) +parseInt(annualPassF);

    document.getElementById("ap2").innerText = `${parseInt(annualPass) +parseInt(annualPassF)} x 5000`;
    
    document.getElementById("ft1").innerText = parseInt(foodToken) + parseInt(foodTokenF);

    document.getElementById("ft2").innerText = `${parseInt(foodToken) + parseInt(foodTokenF)} x 500`;

    let sum = 0;
    for (let i = 0; i < times.length; i++) {
        sum = sum + parseFloat(times[i]);
        console.log(sum);
        txtOutput.innerText = total + sum; 
        
    }
    
    }

//checking duration
let durations = document.querySelectorAll("input[name='duration']");
let times = [];
for (let i = 0; i < durations.length; i++) {
    durations[i].addEventListener("change", checkDuration);
    }
    function checkDuration() {
        if (this.value == "3 hours") {
            document.getElementById("duration").innerText = "3 hours";
        
            document.getElementById("duration-cost").innerText = "no additional charge"; 

            times.push("0");
        }
        else if (this.value == "half-day") {
            document.getElementById("duration").innerText = "1/2 day (12 hours)";
        
            document.getElementById("duration-cost").innerText = "250"; 

            times.push("250");
        }
        else if (this.value == "day"){
            document.getElementById("duration").innerText = "1 day (24 hours)";
        
            document.getElementById("duration-cost").innerText = "500";

            times.push("500");
        }
        else{
            document.getElementById("duration").innerText = "2 days (48 hours)";
        
            document.getElementById("duration-cost").innerText = "1000";

            times.push("1000");
        }
    }

let durations2 = document.querySelectorAll("input[name='durationF']");
for (let i = 0; i < durations2.length; i++) {
    durations2[i].addEventListener("change", checkDuration2);
    }
    function checkDuration2() {
        if (this.value == "3 hours") {
            document.getElementById("duration").innerText = "3 hours";
        
            document.getElementById("duration-cost").innerText = "1000"; 
        
            times.push("1000");
        }
        else if (this.value == "half-day") {
            document.getElementById("duration").innerText = "1/2 day (12 hours)";
        
                document.getElementById("duration-cost").innerText = "500";

                times.push("500");
        }
        else if (this.value == "day"){
            document.getElementById("duration").innerText = "1 day (24 hours)";
        
                document.getElementById("duration-cost").innerText = "1000";

                times.push("1000");
        }
        else{
            document.getElementById("duration").innerText = "2 days (48 hours)";
        
            document.getElementById("duration-cost").innerText = "2000";

            times.push("2000");
        }
    }
        


function placeOrder(){  //product manufacturer names
    let optActivity = document.getElementById("activity");
    activity = optActivity.options[optActivity.selectedIndex].value;
    if (activity == 'Safari'){
        alert("Thankyou for your reservation \nProvided by: Yala National Park" );
    } 
    else if (activity == 'Surfing'){
        alert("Thankyou for your reservation \nProvided by: Arugam Bay Surf" );
    }
    else if (activity == 'Whale-Watching'){
        alert("Thankyou for your reservation \nProvided by: Whale Watching Mirissa" );       
    }  
    else{
        alert("Please select an activity.");
    } 
}

