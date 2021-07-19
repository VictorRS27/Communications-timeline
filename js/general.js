Object, onload = function() {
    document.getElementById(6).style.display = "block";
}

function sabado(witch) {
    for (let index = 1; index < 8; index++) {
        document.getElementById(index).style.display = "none";
    }

    document.getElementById(witch).style.display = "block";
}