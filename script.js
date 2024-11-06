function calcularPI() {

    let iteraciones = parseInt(document.getElementById('iteraciones').value);
    if (isNaN(iteraciones) || iteraciones <= 0) {
        alert("Por favor, ingrese un número válido de iteraciones.");
        return;
    }

    let puntosDentroDelCirculo = 0;

    for (let i = 0; i < iteraciones; i++) {

        let x = Math.random() * 2 - 1; 
        let y = Math.random() * 2 - 1; 

        if (x * x + y * y <= 1) {
            puntosDentroDelCirculo++;
        }
    }

    let piAproximado = (puntosDentroDelCirculo / iteraciones) * 4;

    document.getElementById('resultado').textContent = "Valor aproximado de PI: " + piAproximado.toFixed(6);

    if (iteraciones < 10000) {
        document.getElementById('resultado').textContent += " (Advertencia: Para una estimación más precisa, prueba con más iteraciones)";
    }
}
