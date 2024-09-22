function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value); 
  
  
    if (isNaN(peso) || isNaN(altura)) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }
  
    const imc = peso / (altura * altura);
    const resultadoElement = document.getElementById('resultado'); 
  
  
    resultadoElement.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
  
    // Classificação do IMC (pode ser personalizada)
    if (imc < 18.5) {
      resultadoElement.textContent += ' - Abaixo do peso';
    } else if (imc < 25) {
      resultadoElement.textContent += ' - Peso normal';
    } else if (imc < 30) {
      resultadoElement.textContent += ' - Sobrepeso';
    } else {
      resultadoElement.textContent += ' - Obesidade';
    }
  }