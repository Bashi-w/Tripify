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

const radios = document.getElementsByClassName('dur')
for (const radio of radios){
    radio.onclick = (e) => {
        if(e.target.value == "3 hours"){
            if (foreignAdults.value > 0 && foreignChildren1.value > 0){
                console.log("hi")
                document.getElementById("duration").innerText = "3 hours";
        
                document.getElementById("duration-cost").innerText = "1000"; //test
                document.getElementById("d-cost").innerText = " + 1000 LKR" //tryto add this to total
            }

            else if(localAdults.value > 0 && (localChildren1.value > 0 || localChildren2.value > 0)){
                document.getElementById("duration").innerText = "3 hours";
        
                document.getElementById("duration-cost").innerText = "no additional charge"; 

            }
            
        }
        if (e.target.value == "half-day"){
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
        if(e.target.value == "day"){
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
}

/*function checkDuration1(){
    //console.log("helo")
    if (foreignAdults.value > 0 && foreignChildren1.value > 0){
        //console.log("+1000");

        total = 1000 + parseInt(localAdults.value*2500)  + parseInt(foreignAdults.value*3000) + parseInt(foreignChildren1.value*2500) + parseInt(localChildren1.value*1000) + parseInt(localChildren2.value*500) + parseInt(annualPass.value*5000) + parseInt(foodToken.value*500);

        let durationCost = 1000; 

        document.getElementById("duration").innerHTML = "3 hours";
        
        document.getElementById("duration-cost").innerHTML = "+ 1000 LKR"; //test
        txtOutput.innerText = `${total} LKR`;

    }
    else{
        console.log("nocharge");
        total +=0;
    }
}

function checkDuration2(){
    if(txtLocalAdults.value > 0 && (txtLocalChildren1.value > 0 || txtLocalChildren2.value > 0)){
        console.log("test");
        total = 250 + txtLocalAdults.value*2500 + txtForeignAdults.value*3000 + txtForeignChildren1.value*2500 + txtLocalChildren1.value*1000 + txtLocalChildren2.value*500 + annualPass.value*5000 + foodToken.value*500;
    }
    else if(txtForeignAdults.value > 0 && txtForeignChildren1.value > 0){
        console.log("test2")
        total = 500 + txtLocalAdults.value*2500 + txtForeignAdults.value*3000 + txtForeignChildren1.value*2500 + txtLocalChildren1.value*1000 + txtLocalChildren2.value*500 + annualPass.value*5000 + foodToken.value*500;
    }
}

function checkDuration3(){
    if(txtLocalAdults.value > 0 && (txtLocalChildren1.value > 0 || txtLocalChildren2.value > 0)){
        console.log("test");
        total = 500 + txtLocalAdults.value*2500 + txtForeignAdults.value*3000 + txtForeignChildren1.value*2500 + txtLocalChildren1.value*1000 + txtLocalChildren2.value*500 + annualPass.value*5000 + foodToken.value*500;
    }
    else if(txtForeignAdults.value > 0 && txtForeignChildren1.value > 0){
        console.log("test2")
        total = 1000 + txtLocalAdults.value*2500 + txtForeignAdults.value*3000 + txtForeignChildren1.value*2500 + txtLocalChildren1.value*1000 + txtLocalChildren2.value*500 + annualPass.value*5000 + foodToken.value*500;
    }
}

*/




// without this order stays blank
//addorder();

function placeOrder(){ //add produc manufacturer name   
    alert("Thankyou for your reservation")
    
}