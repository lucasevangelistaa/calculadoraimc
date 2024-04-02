function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (altura && peso) {
        var imc = peso / (altura * altura);
        var resultado = '';
        var classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            classificacao = 'Obesidade grau I';
        } else if (imc >= 35 && imc < 40) {
            classificacao = 'Obesidade grau II';
        } else {
            classificacao = 'Obesidade grau III';
        }

        resultado = '<h3>Seu IMC é:</h3> ' + imc.toFixed(2) + '<br>' + '<h3>Classificação:</h3> ' + classificacao;
        document.getElementById('resultado').innerHTML = resultado;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
