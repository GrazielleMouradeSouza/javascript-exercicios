// CHAMANDO AS VARÁVEIS

const nomealuno = document.getElementById("nomealuno");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const cadastrar = document.getElementById("cadastrar");
const resultado = document.getElementById("resultado");


// FUNÇÃO PARA VALIDAÇÕES

function nomeAlunos(){

    let nomeValido = nomealuno.value;

    if ( nomeValido.trim() == ""){
        alert("Digite um nome válido!");
        return false;
    }

    // NOTAS VAZIA 

    if (
        n1.value == "" ||
        n2.value == "" ||
        n3.value == "" ||
        n4.value == ""
    ){
        alert("Preencha todas as notas!");
        return false;
    }

    // TRANSFORMANDO EM NÚMEROS 

    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    let num3 = Number(n3.value);
    let num4 = Number(n4.value);

    // VERIFICANDO SE O NÚMERO ESTÁ ENTRE 0 E 10

    if(
        num1 < 0 || num1 > 10 ||
         num2 < 0 || num2 > 10 ||
          num3 < 0 || num3 > 10 ||
           num4 < 0 || num4 > 10 
    ){
        alert("As notas devem estar entre 0 e 10!")
        return false;
    }

    return true;

};


// FUNÇÃO PARA CALCULAR A MÉDIA

function mediaAlunos(){
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    let num3 = Number(n3.value);
    let num4 = Number(n4.value);

    return (num1+num2+num3+num4) / 4;
    
};

// ADICIONANDO UM COMANDO PARA O BOTÃO

cadastrar.addEventListener("click", function(e){

    e.preventDefault();

    if(nomeAlunos()){

        caixaResultado.style.display="block";

    let camporesultado = mediaAlunos();

    resultado.innerHTML = ` Nome: ${nomealuno.value} <br>
    Notas cadastradas: <br>
    1º: ${n1.value} <br>
    2º: ${n2.value} <br>
    3º: ${n3.value} <br>
    4º: ${n4.value} <br>
    Média Final: ${camporesultado.toFixed(2)}`;
    situacaoFinal.innerHTML = ` Situação final: ${situacaoAluno(camporesultado)}`;

    listaAlunos.innerHTML += `
<div class="aluno-card">
    <hr>
    <h3>${nomealuno.value}</h3>
    Notas cadastradas: <br>
    1º: ${n1.value} <br>
    2º: ${n2.value} <br>
    3º: ${n3.value} <br>
    4º: ${n4.value} <br>

    <p>Média Final: ${camporesultado.toFixed(2)}</p>

    <p>Situação Final:
    ${situacaoAluno(camporesultado)}</p>

</div>
`;

// LIMPA TODOS OS CAMPOS PARA CADASTRAR O PRÓXIMO ALUNO
nomealuno.value = "";
n1.value = "";
n2.value = "";
n3.value = "";
n4.value = "";
}
}); 

// MOSTRAR A SITUAÇÃO DO ALUNO

const situacaoFinal = document.getElementById("situacaoFinal");

function situacaoAluno(mediaAlunos){

    if(mediaAlunos >=7){

        return '<div class="aprovado"><span class="bolinhav"></span><span>Aprovado!</span></div>';

    } else if ( mediaAlunos >=5 && mediaAlunos <7){

        return '<div class="recuperacao"><span class="bolinham"></span><span>Recuperação!</span></div>';
        
    } else if (mediaAlunos < 5){

        return '<div class="reprovado"><span class="bolinhar"></span><span>Reprovado!</span></div>';

    }

};

// CHAMANDO A VARIÁVEL PARA ESTILIZAR NO CSS

const caixaResultado = document.getElementById("caixaResultado");
const caixacontainer = document.getElementById("caixacontainer");



