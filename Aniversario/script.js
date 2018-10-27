/*
*Autor: João Kanga
*/
var todasdivs = document.getElementsByTagName("div"),
audiot = document.getElementsByName("audio"),
divs = [], cores = ["red","yellow","aqua","skyblue","lightblue","darkred","pink","pink","brown","blue","darkblue","#c98282","#1bd1a4","#33aca2","#2ae248","#a18619"], imagem,imagens = [];

imagem = document.createElement("img");
document.body.appendChild(imagem);

    
for(let i = 0; i < 60; i++){
    divs.push('div'+i);
}
for (let i = 0; i < 60; i++) {
    divs[i] = document.createElement("div");
}
for (let i = 0; i < 60; i++) {
    document.body.appendChild(divs[i]);
}
/*para as animacoes */
setInterval(anim, 1000/12);
setInterval(anim1, 1000);
/*para a div que vai para cima*/
valorTopo = 500;
var totalcores = cores.length;
 /* audio de fundo */
    var audio = document.createElement("audio");
    document.body.appendChild(audio);
    audio.src = "_media/aniversario.mp3";
    audio.loop = "loop";
function anim() {
    let z = 0;
    if(valorTopo == 390){
        Escrever();
        audio.play();
        for (let i = 0; i < 60; i++) {
            divs[i].style.top = 20 + Math.floor(Math.random() * 560) + 'px';
            divs[i].style.left = 11 + Math.floor(Math.random() * 1300) + 'px';
            divs[i].style.bottom = 23 + Math.floor(Math.random() * 120) + 'px';
            divs[i].style.right = 18 + Math.floor(Math.random() * 8) + 'px';
            var coresaleatorio = Math.floor(Math.random() * totalcores);
            divs[i].style.backgroundColor = cores[coresaleatorio];
            document.body.style.backgroundColor = cores[coresaleatorio];
        }

    }else{
            z++;
            valorTopo = valorTopo - z;
            for (let i = 0; i < 60; i++) {
                divs[i].style.top = valorTopo + 'px';
                divs[i].style.left = 700 + 'px';
                divs[i].style.backgroundColor = cores[coresaleatorio];
                var coresaleatorio = Math.floor(Math.random() * totalcores);
            }
        }
    }
function anim1() {
    imagens = ["_img/img1.jpg","_img/img2.jpg","_img/img3.jpg","_img/img4.jpg","_img/img5.jpg","_img/img6.jpg","_img/img7.jpg","_img/img8.jpg","_img/img9.jpg","_img/img10.jpg"];    
    let totalimg = imagens.length;
    var imgaleatorio = Math.floor(Math.random() * totalimg);
    imagem.src = imagens[imgaleatorio];
    let totalcores = cores.length;
    var coresaleatorio = Math.floor(Math.random() * totalcores);
    texto.style.color = texto1.style.color = texto2.style.color = cores[coresaleatorio];
}