const message = document.getElementsByClassName(".message");

message.addEventListener("click", hello)

function hello (elementMessage){
    let messageText = elementMessage.firstElementChild.innerText
    let numberDestination = window.prompt("Para qual número deseja enviar a mensagem? DD 9XXXX-XXXX", "Insira um número válido!");

    if (numberDestination == null || numberDestination == "") {
        alert("Preencher o número que deseja enviar a mensagem via Whatsapp!");
    } else {
        let toWhatsapp = `https://api.whatsapp.com/send?phone=55${numberDestination}&text=${messageText}`
        window.open(toWhatsapp);
    }
    
}
