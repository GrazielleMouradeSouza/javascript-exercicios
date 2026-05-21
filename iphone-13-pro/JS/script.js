const verde = document.getElementById("verde");
const prateado = document.getElementById("prateado");
const dourado = document.getElementById("dourado");
const grafite = document.getElementById("grafite");
const azul = document.getElementById("azul");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

function trocaCor (cor){

    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";

    cor.style.display = "block";

};

verde.addEventListener("click", function()
{
    trocaCor(img1);
});

prateado.addEventListener("click", function()
{
    trocaCor(img2);
});

dourado.addEventListener("click", function()
{
    trocaCor(img3);
});

grafite.addEventListener("click", function()
{
    trocaCor(img4);
});

azul.addEventListener("click", function()
{
    trocaCor(img5);
})