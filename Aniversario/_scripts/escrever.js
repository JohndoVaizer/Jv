var texto = document.createElement('p'),
texto2 = document.createElement('p'),texto1 = document.createElement('h1');
texto.className = "aniver"
texto1.className = "nome";
texto2.className = "parabens";
document.body.appendChild(texto);
document.body.appendChild(texto1);
document.body.appendChild(texto2);
function Escrever() {
    texto.innerHTML = "Feliz Aniversário";
    texto1.innerHTML = "Nome Aniversariante";
    texto2.innerHTML = "Parabéns";
}
