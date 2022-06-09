// asignar precio
precio = 4000000
// acceder a valor e instertar en html
valor = document.querySelector("#valor");
valor.innerHTML = precio;
// default imagen de producto
document.getElementById("producto").src = "assets/img/autoblanco.png";
document.querySelector("#colorusuario").style.background= "white";
//Función de calculo Precio - Cantidad - Color
function calcular() {
    // Buscamos el input de cantidad
    cantidad = document.querySelector("#cantidad")
    // Acceder al valor del input
    total = (cantidad.value * precio);
    console.log(total)
    // selección e insertar valor total
    valorTotal = document.querySelector("#valortotal")
    valorTotal.innerHTML = total;
    // seleccion e insertar cantidad
    quantity = document.querySelector("#quantity")
    quantity.innerHTML = cantidad.value;
    // buscar input de color
    userColor = document.querySelector("#color")
    // 
    document.querySelector("#colorusuario").style.background= userColor.value;
}
// Función para cambiar según selector
function cambiarImagen() {
    // cambiar src de la imagen por el valor del selector
    document.querySelector("#producto").src = cars.value;
}
