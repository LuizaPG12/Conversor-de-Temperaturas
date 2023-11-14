// Extraindo as opções de conversão

let de = document.querySelector("#convertede");
let para = document.querySelector("#convertepara");

// Função de conversão

function Converter() {
  var valorInserido = document.getElementById("valor");
  var valor = valorInserido.value;
  var valorFloat = parseFloat(valor);
  var valorConvertido = document.getElementById("valorConvertido");

  // Valores NaN
  if (isNaN(valorFloat)) {
    var valorConvertidoNaN = "Por favor, insira um valor!";
    valorConvertido.innerHTML = valorConvertidoNaN;

    // °C para °F
  } else if (de.value == "Celsius" && para.value == "Fahrenheit") {
    var temperaturaF = (valorFloat * 9) / 5 + 32;
    var valorConvertido1 = "O resultado é: " + temperaturaF + " °F";
    valorConvertido.innerHTML = valorConvertido1;

    // °F para °C
  } else if (de.value == "Fahrenheit" && para.value == "Celsius") {
    var temperaturaC = ((valorFloat - 32) * 5) / 9;
    var valorConvertido2 = "O resultado é: " + temperaturaC + " °C";
    valorConvertido.innerHTML = valorConvertido2;

    // °F para K
  } else if (de.value == "Fahrenheit" && para.value == "Kelvin") {
    var temperaturaFK = ((valorFloat - 32) / 9) * 5 + 273;
    var valorConvertido3 = "O resultado é: " + temperaturaFK + " K";
    valorConvertido.innerHTML = valorConvertido3;

    // K para °F
  } else if (de.value == "Kelvin" && para.value == "Fahrenheit") {
    var temperaturaK = ((valorFloat - 273) / 5) * 9 + 32;
    var valorConvertido4 = "O resultado é: " + temperaturaK + " °F";
    valorConvertido.innerHTML = valorConvertido4;

    // K para °C
  } else if (de.value == "Kelvin" && para.value == "Celsius") {
    var valor5 = valorFloat - 273;
    var valorConvertido5 = "O resultado é: " + valor5 + " °C";
    valorConvertido.innerHTML = valorConvertido5;

    // °C para K
  } else if (de.value == "Celsius" && para.value == "Kelvin") {
    var valor6 = valorFloat + 273;
    var valorConvertido6 = "O resultado é: " + valor6 + " K";
    valorConvertido.innerHTML = valorConvertido6;

    // Réaumur para °C
  } else if (de.value == "Réaumur" && para.value == "Celsius") {
    var valor7 = valorFloat * (5 / 4);
    var valorConvertido7 = "O resultado é: " + valor7 + " °C";
    valorConvertido.innerHTML = valorConvertido7;

    // °C para Réaumur
  } else if (de.value == "Celsius" && para.value == "Réaumur") {
    var valor8 = valorFloat * (4 / 5);
    var valorConvertido8 = "O resultado é: " + valor8 + " °Ré";
    valorConvertido.innerHTML = valorConvertido8;

    // Réaumur para K
  } else if (de.value == "Réaumur" && para.value == "Kelvin") {
    var valor9 = valorFloat * (5 / 4) + 273;
    var valorConvertido9 = "O resultado é: " + valor9 + " K";
    valorConvertido.innerHTML = valorConvertido9;

    // K para Réaumur
  } else if (de.value == "Kelvin" && para.value == "Réaumur") {
    var valor10 = (valorFloat - 273) * (4 / 5);
    var valorConvertido10 = "O resultado é: " + valor10 + " °Ré";
    valorConvertido.innerHTML = valorConvertido10;

    // Réaumur para °F
  } else if (de.value == "Réaumur" && para.value == "Fahrenheit") {
    var valor11 = valorFloat * 2.25 + 32;
    var valorConvertido11 = "O resultado é: " + valor11 + " °F";
    valorConvertido.innerHTML = valorConvertido11;

    // °F para Réaumur
  } else if (de.value == "Fahrenheit" && para.value == "Réaumur") {
    var valor12 = (valorFloat - 32) / 2.25;
    var valorConvertido12 = "O resultado é: " + valor12 + " °Ré";
    valorConvertido.innerHTML = valorConvertido12;

    // Rankine para Réaumur
  } else if (de.value == "Rankine" && para.value == "Réaumur") {
    var valorparaF = valorFloat - 459.67;
    var valor13 = (valorparaF - 32) / 2.25;
    var valorConvertido13 = "O resultado é: " + valor13 + " °Ré";
    valorConvertido.innerHTML = valorConvertido13;

    // Réaumur para Rankine
  } else if (de.value == "Réaumur" && para.value == "Rankine") {
    var valorparaF2 = valorFloat * 2.25 + 32;
    var valor14 = valorparaF2 + 459.67;
    var valorConvertido14 = "O resultado é: " + valor14 + " °Ra";
    valorConvertido.innerHTML = valorConvertido14;

    // Rankine para °F
  } else if (de.value == "Rankine" && para.value == "Fahrenheit") {
    var valor15 = valorFloat - 459.67;
    var valorConvertido15 = "O resultado é: " + valor15 + " °F";
    valorConvertido.innerHTML = valorConvertido15;

    // °F para Rankine
  } else if (de.value == "Fahrenheit" && para.value == "Rankine") {
    var valor16 = valorFloat + 459.67;
    var valorConvertido16 = "O resultado é: " + valor16 + " °Ra";
    valorConvertido.innerHTML = valorConvertido16;

    // °C para Rankine
  } else if (de.value == "Celsius" && para.value == "Rankine") {
    var valor17 = (valorFloat * 9) / 5 + 491.67;
    var valorConvertido17 = "O resultado é: " + valor17 + " °Ra";
    valorConvertido.innerHTML = valorConvertido17;

    // Rankine para °C
  } else if (de.value == "Rankine" && para.value == "Celsius") {
    var valor18 = (valorFloat - 491.67) * (5 / 9);
    var valorConvertido18 = "O resultado é: " + valor18 + " °Ra";
    valorConvertido.innerHTML = valorConvertido18;

    // Rankine para K
  } else if (de.value == "Rankine" && para.value == "Kelvin") {
    var valor19 = valorFloat * (5 / 9);
    var valorConvertido19 = "O resultado é: " + valor19 + " K";
    valorConvertido.innerHTML = valorConvertido19;

    // K para Rankine
  } else if (de.value == "Kelvin" && para.value == "Rankine") {
    var valor20 = valorFloat * 1.8;
    var valorConvertido20 = "O resultado é: " + valor20 + " °Ra";
    valorConvertido.innerHTML = valorConvertido20;

    // Valores De e Para
  } else if (
    (de.value == "de" && para.value == "para") ||
    de.value == "de" ||
    para.value == "para"
  ) {
    var valorConvertidoDe = "Por favor, selecione uma opção válida!";
    valorConvertido.innerHTML = valorConvertidoDe;

    // Valores iguais
  } else if (de.value == para.value) {
    var valorIgual = valorFloat;
    var valorConvertidoIgual =
      "Você inseriu a mesma unidade. O resultado é " +
      valorIgual +
      " " +
      de.value;
    valorConvertido.innerHTML = valorConvertidoIgual;

    // Demais condições
  } else {
    var valorErro1 = de.value;
    var valorErro2 = para.value;
    valorConvertido.innerHTML =
      "Não é possível converter " +
      valorErro1 +
      " para " +
      para.value +
      ". Tente novamente!";
  }
}
