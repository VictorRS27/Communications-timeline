Object, onload = function() {
    document.getElementById(1).style.display = "flex";
}

function sabado(witch) {
    for (let index = 1; index < 9; index++) {
        document.getElementById(index).style.display = "none";
    }

    document.getElementById(witch).style.display = "block";
    console.log("ta em shok? chama o batman")
}