function encryptarTexto() {
  let texto = document.getElementById("txt1").value;
  let place = document.getElementById("txt1");

  if (texto != "") {
    let minus = texto.toLowerCase();
    let palabra = minus.split("").join("");
    let palabraNuevo = [];
    let cont = 0;

    for (let i = 0; i < palabra.length; i++) {
      cont = 0;
      switch (palabra[i]) {
        case "a":
          palabraNuevo.push("ai");
          cont++;
          break;
        case "e":
          palabraNuevo.push("enter");
          cont++;
          break;
        case "i":
          palabraNuevo.push("imes");
          cont++;
          break;
        case "o":
          palabraNuevo.push("ober");
          cont++;
          break;
        case "u":
          palabraNuevo.push("ufat");
          cont++;
          break;
      }
      if (cont == 0) {
        palabraNuevo.push(palabra[i]);
      }
    }
    let ultima = palabraNuevo.join("");
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").style.backgroundImage = "none";
    document.getElementById("txt2").value = ultima;
    place.placeholder = "Ingrese el texto aqui";
  } else {
    let place = document.getElementById("txt1");
    place.placeholder = "Debe ingresar un texto a Encryptar";
  }
}

function desencryptarTexto() {
  let cambio = ["ai", "enter", "imes", "ober", "ufat"];
  let original = ["a", "e", "i", "o", "u"];

  let texto = document.getElementById("txt1").value;
  let arregloPalabra = texto.split("").join("");

  if(texto.length === 0){
    let place = document.getElementById("txt1");
    place.placeholder = "Debe ingresar un texto a Desencryptar";
  }else{

    for (let i = 0; i < cambio.length; i++) {
      if (arregloPalabra.includes(cambio[i])) {
        arregloPalabra = arregloPalabra.replace(
          new RegExp(cambio[i], "g"),
          original[i]
        );
      }
    }
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").style.backgroundImage = "none";
    document.getElementById("txt2").value = arregloPalabra;
  }
 
}

function copiarContent() {
  var textarea = document.getElementById("txt2");
  textarea.select();
  document.execCommand("copy");
}

function limpiarContent(){
  let estado = document.getElementById("txt2").value;
  if(estado.length != 0){
    document.getElementById("txt2").value = "";
    document.getElementById("txt2").style.backgroundImage = "url(imagen2.png)";
  }else{
    document.getElementById("txt2").style.backgroundImage = "url(imagen2.png)";
  }
}

