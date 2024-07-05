document.addEventListener("DOMContentLoaded", function() {
    const calcBtn = document.getElementById("calc-btn");
    const backBtn = document.getElementById("back-btn");
    const resultContainer = document.getElementById("result-container");
    const imcNumber = document.getElementById("imc-number").querySelector("span");
    const imcInfo = document.getElementById("imc-info").querySelector("span");
    const imcTable = document.getElementById("imc-table");

    calcBtn.addEventListener("click", function() {
        // Obter os valores do formulário
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100; // Converter altura para metros
        const name = document.getElementById("name").value;
        const age = parseInt(document.getElementById("age").value);
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // Calcular IMC
        const imc = weight / (height * height);

        // Arredondar o IMC para uma casa decimal
        const imcRounded = imc.toFixed(1);

        // Determinar a situação atual com base no IMC
        let situation;
        if (imc < 18.5) {
            situation = "Magreza";
        } else if (imc >= 18.5 && imc <= 24.9) {
            situation = "Normal";
        } else if (imc >= 25 && imc <= 29.9) {
            situation = "Sobrepeso";
        } else if (imc >= 30 && imc <= 39.9) {
            situation = "Obesidade";
        } else {
            situation = "Obesidade mórbida";
        }

        // Exibir o resultado do IMC e a situação atual apenas uma vez
        imcNumber.textContent = `Seu IMC: ${imcRounded}`;
        imcInfo.textContent = `Situação atual: ${situation}`;

        // Mostrar o resultado e tabela
        resultContainer.style.display = "block";
        imcTable.style.display = "block";
        backBtn.style.display = "block";
    });

    // Botão para voltar ao formulário
    backBtn.addEventListener("click", function() {
        resultContainer.style.display = "none";
        imcTable.style.display = "none";
        backBtn.style.display = "none";

        imcForm.reset();
    });
});
