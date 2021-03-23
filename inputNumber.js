function myInputNumber () {
    let myNumber;
    //hämtar värdet från input - OBS! "id" ska korrigeras!
    myNumber = document.getElementById("number").value;

    //kollar som värdet i input är ok
    if (isNaN(myNumber) || myNumber < 1 || myNumber > 20) {
        console.log("Input not valid");
        document.getElementById("numberOutput").innerHTML = "Error - välj en siffra mellan 1 och 20!"
       
    } else {
        console.log("input OK")
        //skriver ut valt nummer - OBS! "id" ska korrigeras!
        document.getElementById("numberOutput").innerHTML = "Du valde nummer: " + myNumber;
    }

}