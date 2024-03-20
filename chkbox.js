const chkbox = document.getElementById("chkbox");
const visa = document.getElementById("visa");
const upi = document.getElementById("upi");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

submit.onclick = function(){
    if(chkbox.checked){
       if(visa.checked){
        subResult.textContent = `Subscribed using visa.`;
       }
       else if(upi.checked){
        subResult.textContent = `Subscribed using UPI.`;
       }
       else{
        subResult.textContent = `Please select an option to pay.`;
       }
    }
    else{
        subResult.textContent = `Not Subscribed.`;
    }
}
