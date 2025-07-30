const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;

function jogar() {
  const input = document.getElementById("palpite");
  const palpite =  parseInt(input.value); 

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    document.getElementById("mensagem").textContent = "Digite um número entre 1 e 100.";
    return;
  }

  if (tentativasRestantes > 0) {
    tentativasRestantes--;

    if (palpite === numeroSecreto) {
       document.getElementById("mensagem").textContent = "🎉 você acertou!";
       document.getElementById("tentativas").textContent = "";
    } else if (palpite < numeroSecreto) {
       document.getElementById("mensagem").textContent = "🔼 o número secreto é maior."; 
       document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    } else {
       document.getElementById("mensagem").textContent = "🔽 o número secreto é menor.";
       document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    }

    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
     document.getElementById("mensagem").textContent = `😢 Você perdeu! O número era ${numeroSecreto}.`;
     document.getElementById("tentativas").textContent = "";

    }
 }

  input.value = "";
  input.focus();
}