//check all prices again

const localAdults = document.getElementById("local-adults");
const localChildren1 = document.getElementById("local-children1");
const localChildren2 = document.getElementById("local-children2");
const foreignAdults = document.getElementById("foreign-adults");
const foreignChildren1 = document.getElementById("foreign-children1");
const txtForeignChildren2 = document.getElementById("foreign-children2");
const txtOutput = document.getElementById("overall-cost");
const txtCurrentOrder = document.getElementById("current-order");
const annualPass = document.getElementById("pass");
const foodToken = document.getElementById("token");
const btnAdd = document.getElementById("add");
const btnPlace = document.getElementById("place");
btnAdd.addEventListener("click", addorder);
btnPlace.addEventListener("click", placeOrder);



//let total = txtLocalAdults.value*2500 + txtForeignAdults.value*3000 + txtForeignChildren1.value*2500 + txtLocalChildren1.value*1000 + txtLocalChildren2.value*500 + annualPass.value*5000 + foodToken.value*500;


//let choice = document.getElementById("ticket").firstElementChild.textContent;
//if (choice=="Local pass"){
//    console.log("idiot");
//}

//document.getElementById("three").addEventListener("click", checkDuration1)
//document.getElementById("half-day").addEventListener("click", checkDuration2)
//document.getElementById("day").addEventListener("click", checkDuration3)


function myFunction(){ // something about var being bad practice.. use let instead
    let cost = localAdults.value * 2500;
    document.getElementById("cost1").innerText = cost;
    document.getElementById("1").innerText = `Adult Passes(Local): ${localAdults.value}`;

    let cost2 = localChildren1.value * 1000;
    document.getElementById("cost2").innerText = cost2;
    document.getElementById("2").innerText = `Child Passes(Local): ${parseInt(localChildren1.value) + parseInt(localChildren2.value)}`;

    let cost3 = localChildren2.value * 500;
    document.getElementById("cost3").innerText = cost3;

    let cost4 = foreignAdults.value * 3000;
    document.getElementById("cost4").innerText = cost4;
    document.getElementById("3").innerText = `Adult Passes(Foreign): ${foreignAdults.value}`;

    let cost5 = foreignChildren1.value * 2500;
    document.getElementById("cost5").innerText = cost5;
    document.getElementById("4").innerText = `Child Passes(Foreign): ${foreignChildren1.value}`;

    let cost7 = annualPass.value * 5000;
    document.getElementById("cost7").innerText = cost7;
    document.getElementById("5").innerText = `Annual Passes: ${annualPass.value}`;

    let cost8 = foodToken.value * 500;
    document.getElementById("cost8").innerText = cost8;
    document.getElementById("6").innerText = `Food Tokens: ${foodToken.value}`;

    let currentCost = localAdults.value*2500 + foreignAdults.value*3000 + foreignChildren1.value*2500 + localChildren1.value*1000 + localChildren2.value*500 + annualPass.value*5000 + foodToken.value*500;

    document.getElementById("7").innerText = `Current Cost is ${currentCost} LKR`

}



//type of ticket
/*let tickets = document.querySelectorAll("input[name='ticket']");
for (let i = 0; i < tickets.length; i++) {
tickets[i].addEventListener("change", checkTicket);
}

function checkTicket() {
    if (this.checked){
        if (this.value == "local") {  
            document.getElementById("foreign-tickets").setAttribute('disabled', '');
        }
        else if (this.value =="foreigner") {
            document.getElementById("local-tickets").setAttribute('disabled', '');
        }
    }


}*/


function addorder(){
    let total = localAdults.value*2500 + foreignAdults.value*3000 + foreignChildren1.value*2500 + localChildren1.value*1000 + localChildren2.value*500 + annualPass.value*5000 + foodToken.value*500 ;

    const localPasses = parseInt(localAdults.value) +parseInt(localChildren1.value) + parseInt(localChildren2.value);

    const foreignPasses = parseInt(foreignAdults.value) + parseInt(foreignChildren1.value);


    document.getElementsByClassName("a")[0].innerText = "No Current Orders";

    //making current order blank 
    const element = document.getElementById("order-container");
    let nodes = element.getElementsByClassName("b");
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].innerText = " ";
    }

   

    document.getElementById("l1").innerText = localAdults.value;

    document.getElementById("l2").innerText = `${localAdults.value} x 2500`

    document.getElementById("lc1").innerText = parseInt(localChildren1.value) + parseInt(localChildren2.value)

    document.getElementById("lc2").innerText = `${localChildren1.value} x 2500 + ${localChildren2.value} x 1000`

    document.getElementById("f1").innerText = foreignAdults.value;

    document.getElementById("f2").innerText = `${foreignAdults.value} x 3000`

    document.getElementById("fc1").innerText = foreignChildren1.value;

    document.getElementById("fc2").innerText = `${foreignChildren1.value} x 2500`

    document.getElementById("ap1").innerText = annualPass.value;

    document.getElementById("ap2").innerText = `${annualPass.value} x 5000`
    
    document.getElementById("ft1").innerText = foodToken.value;

    document.getElementById("ft2").innerText = `${foodToken.value} x 500`

    
    txtOutput.innerText = `${total} LKR`;

    

    


}

//duration

let durations = document.querySelectorAll("input[name='duration']");
for (let i = 0; i < durations.length; i++) {
    durations[i].addEventListener("change", checkDuration);
    }
    //check which value is linked to radio button
    function checkDuration() {
        if (this.value == "3 hours") {
            if (foreignAdults.value > 0 && foreignChildren1.value > 0){
                //console.log("hi")
                document.getElementById("duration").innerText = "3 hours";
        
                document.getElementById("duration-cost").innerText = "1000"; //test
                document.getElementById("d-cost").innerText = " + 1000 LKR" //tryto add this to total
            }
            else if(localAdults.value > 0 && (localChildren1.value > 0 || localChildren2.value > 0)){
                document.getElementById("duration").innerText = "3 hours";
        
                document.getElementById("duration-cost").innerText = "no additional charge"; 

            }
        }
        else if (this.value == "half-day") {
            if(localAdults.value > 0 && (localChildren1.value > 0 || localChildren2.value > 0)){
                //console.log("hey girl")

                document.getElementById("duration").innerText = "1/2 day (12 hours)";
        
                document.getElementById("duration-cost").innerText = "250"; 

                document.getElementById("d-cost").innerText = " + 250 LKR" //tryto add this to total
            }
            else if(foreignAdults.value > 0 && foreignChildren1.value > 0){
                //console.log("bcdjc")

                document.getElementById("duration").innerText = "1/2 day (12 hours)";
        
                document.getElementById("duration-cost").innerText = "500";

                document.getElementById("d-cost").innerText = " + 500 LKR" //tryto add this to total
            }
        }
        else if (this.value == "day"){
            if(localAdults.value > 0 && (localChildren1.value > 0 || localChildren2.value > 0)){
                //console.log("hey girl")
                
                document.getElementById("duration").innerText = "1 day (24 hours)";
        
                document.getElementById("duration-cost").innerText = "500";

                document.getElementById("d-cost").innerText = " + 500 LKR" //tryto add this to total

            }
            else if(foreignAdults.value > 0 && foreignChildren1.value > 0){
                document.getElementById("duration").innerText = "1 day (24 hours)";
        
                document.getElementById("duration-cost").innerText = "1000";

                document.getElementById("d-cost").innerText = " + 1000 LKR" //tryto add this to total
            }
        }
    }
    







// without this order stays blank
//addorder();


function placeOrder(){  //product manufacturer names
    //event.preventDefault();
    let optActivity = document.getElementById("activity");
    activity = optActivity.options[optActivity.selectedIndex].value;
    if (activity == 'Safari'){
        alert("Thankyou for your reservation \nProvided by: Yala National Park" )
    } 
    if (activity == 'Surfing'){
        alert("Thankyou for your reservation \nProvided by: Arugam Bay Surf" )
    }
    else if (activity == 'Whale-Watching'){
        alert("Thankyou for your reservation \nProvided by: Whale Watching Mirissa" )        
    }   
}
