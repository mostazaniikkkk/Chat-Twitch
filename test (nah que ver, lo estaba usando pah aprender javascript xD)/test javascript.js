window.onload = testing;

function testing(){
    var rango =document.getElementById("rango");
    var username = document.getElementById("username");
    var image = document.getElementById("img");
    if(username.textContent == "mostazaniikkkk"){
        rango.style.color = "#cac8c8"
        username.style.color = "#cac8c8"
        function time(){
            image.src = "http://pa1.narvii.com/7264/41d2cfa4e361dc78b2fd76cf4b4b5bdfbb19e091r1-200-200_00.gif",1000 * 10
        }
        setTimeout(time);
        rango.textContent = "Platino"
    }
    else{
        rango.textContent = "Novato"
    }

    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
}

function experimental(){
    $(document).ready
}