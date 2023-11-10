const button = document.querySelector("button");
const color = document.getElementById("color");
const color1 = document.getElementsByClassName("colorContent1");

function randomColor() {
  let digit = "0123456789ABCDEF"; //Establecemos los datos y digitos
  let colorHex = "#"; // establecemos un # para sumarlo con los datos
  for (let i = 0; i < 6; i++) {
    //Ciclo hasta 6 veces que son los 6 digitos del exadecimal
    let randomIndex = Math.floor(Math.random() * 16); //Inicializamos randomIndex para que nos devuelva un numero entero aleatorio
    colorHex += digit[randomIndex]; // sumamos el "#" con el digito en un indice[] aleatorio que se repite hasta 6 veces
  }

  return colorHex;
}

button.addEventListener("click", () => {
  let colorAleatorio = randomColor(); //Guardamos la función de color aleatorio en una variable
  let colorAleatorio1 = randomColor();
  color.textContent = colorAleatorio; //Cambiamos el texto dependiendo del hexadecimal
  document.body.style.backgroundColor = colorAleatorio; //camiamos el color de fondo dependiendo del hexadecimal

  for (let i = 0; i < color1.length; i++) {
    color1[i].style.backgroundColor = colorAleatorio1;
  }
});

console.log(color1);
