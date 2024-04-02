const myCheckBox = document.getElementById("myCheckBox");
const visaCardBtn = document.getElementById("visaCardBtn");
const verveCardbtn = document.getElementById("verveCardBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const cryptoBtn = document.getElementById("cryptoBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are Not subscribed!`;
    }
    if(visaCardBtn.checked){
        paymentResult.textContent = `You're paying with VisaCard`
    }
    else if(verveCardbtn.checked){
        paymentResult.textContent = `You're paying with VerveCard`
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent = `You're paying with MasterCard`
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You're will be redirected to your palpal account`
    }
    else if (cryptoBtn.checked){
       paymentResult.textContent = `You can only pay with ETH or Sol!`
    }
    else{
        paymentResult.textContent = `Kindly select a valid payment method!`
    }





}
