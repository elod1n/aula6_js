function calcularFatorial() {
    var num = document.getElementById('num').value;
    num = parseInt(num);
    
    if (isNaN(num) || num < 0) {
        alert("Insira um número inteiro que não seja negativo.");
        return;
    }
    
    var resultado = 1;
    for (var i = 1; i <= num; i++) {
        resultado *= i;
    }
    
    document.getElementById('resultado').innerText = "O fatorial de " + num + " é: " + resultado;
}