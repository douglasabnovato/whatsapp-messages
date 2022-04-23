const message = document.getElementsByClassName(".message");

message.addEventListener("click", hello)

function hello (elementMessage){
    let messageText = elementMessage.firstElementChild.innerText
    let numberDestination = prompt("Qual é o número?");

    let toWhatsapp = `https://api.whatsapp.com/send?phone=55${numberDestination}&text=${messageText}`

    window.open(toWhatsapp);
}
