function formula() {
    var cantidadTotal=parseInt(document.getElementById("transf").value)
    var cantidadDebito=parseInt(document.getElementById("cantidadDebito").value)
    var cantidadCredito=parseInt(document.getElementById("cantidadCredito").value)
    document.getElementById("cantidadDebito").value=(cantidadDebito - cantidadTotal)
    document.getElementById("cantidadCredito").value=(cantidadCredito + cantidadTotal)
}
function formula2() {
    var cantidadTotal=parseInt(document.getElementById("transf").value)
    var cantidadDebito=parseInt(document.getElementById("cantidadDebito").value)
    var cantidadCredito=parseInt(document.getElementById("cantidadCredito").value)
    document.getElementById("cantidadDebito").value=(cantidadDebito + cantidadTotal)
    document.getElementById("cantidadCredito").value=(cantidadCredito - cantidadTotal)
}
function formula3() {
    var cantidadTotal=parseInt(document.getElementById("transf").value)
    var cantidadDebito=parseInt(document.getElementById("cantidadDebito").value)
    var cantidadCredito=parseInt(document.getElementById("cantidadCredito").value)
    document.getElementById("cantidadDebito").value=(cantidadDebito + cantidadTotal)
}
function formula4() {
    var cantidadTotal=parseInt(document.getElementById("transf").value)
    var cantidadDebito=parseInt(document.getElementById("cantidadDebito").value)
    var cantidadCredito=parseInt(document.getElementById("cantidadCredito").value)
    document.getElementById("cantidadCredito").value=(cantidadCredito + cantidadTotal)
}
function formula5() {
    var cantidadTotal=parseInt(document.getElementById("transf").value)
    var cantidadDebito=parseInt(document.getElementById("cantidadDebito").value)
    var cantidadCredito=parseInt(document.getElementById("cantidadCredito").value)
    document.getElementById("cantidadDebito").value=(cantidadDebito - cantidadTotal)
}
function formula6() {
    var cantidadTotal=parseInt(document.getElementById("transf").value)
    var cantidadDebito=parseInt(document.getElementById("cantidadDebito").value)
    var cantidadCredito=parseInt(document.getElementById("cantidadCredito").value)
    document.getElementById("cantidadCredito").value=(cantidadCredito - cantidadTotal)
}

