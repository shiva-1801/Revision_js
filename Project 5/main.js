
const vale= document.getElementById("one");
const two=document.getElementById("inner-para")
async function hero1() {
  two.src=
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    vale.value;

  
}

