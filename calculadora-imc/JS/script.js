function calcularIMC() {

    const altura =
        Number(document.getElementById("altura").value);

    const peso =
        Number(document.getElementById("peso").value);

    if (altura <= 0 || peso <= 0) {
        alert("Preencha os campos corretamente.");
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {

        classificacao = "Magreza"; 

    } else if (imc < 25) {

        classificacao = "Normal";

    } else if (imc < 30) {

        classificacao = "Sobrepeso";

    } else if (imc < 40) {

        classificacao = "Obesidade";

    } else {

        classificacao = "Obesidade grave";
    }

    document.getElementById("valor-imc").textContent =
        imc.toFixed(1);

    document.getElementById("situacao").textContent =
        classificacao;

    document.getElementById("card-form").style.display =
        "none";

    document.getElementById("resultado-card").style.display =
        "block";
}

function limparCampos() {

    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
}

function voltar() {

    document.getElementById("card-form").style.display =
        "block";

    document.getElementById("resultado-card").style.display =
        "none";
}