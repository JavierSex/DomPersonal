//CONTROLANDO ETIQUETAS CON EL DOM

//1.Almacenar en memoria (Crear una variable)
//la etiqueta que quiero controlar.
let etiquetaImagen=document.getElementById("fotografia")


//2. CONTROLANDO NUESTRAS ETIQUETAS

//2.1 CONTROLAR ES CAMBIAR LA FUENTE (SRC) DE UNA ETIQUETA
etiquetaImagen.src="./img/dufenchsmirz.png"

//2.2 controlar es cambiar el contenido de texto de una etiqueta
let etiquetaTitulo=document.getElementById("titulo")

let etiquetaSinopsis=document.getElementById("sinopsis")

let etiquetaMusica=document.getElementById("musica")

etiquetaTitulo.textContent="Dr.Heinz Doofenshmirtz"

etiquetaSinopsis.textContent="El Dr. Heinz Doofenshmirtz es un científico loco y el dueño de Doofenshmirtz Evil Incorporated (Pérfido Doofenshmirtz S.L. en España; Doofenshmirtz Malvados y Asociados en Hispanoamérica). Su guarida parece ser una importante corporación; aunque su casa es únicamente el ático, como se demostró en “Un crucero romántico”, ya que se la vendieron muy barata, porque el edificio está cerca del faro y se oyen las sirenas de los barcos. La empresa destaca por tener su propio jingle distintivo, el cual aparece en cualquier lugar donde él esté: sosteniendo un cubo (Doofenshmirtz va con un cubo), vendiendo salchichas (en este trabajo el jingle es una voz más grave y no muy convencida), en una isla escondida, y así con cada cosa en la que Doofenshmirtz esté trabajando o viviendo. A pesar de ser un multimillonario (puede costearse sus inventos sin ningún problema, o lo aparenta, ya que muchas cosas que compra las deja a cuenta de su exesposa), es poco conocido en el Área Limítrofe, tal vez porque no se quedó en su propio país. Trata de causar estragos en toda el área Limítrofe (para esta serie, es el conjunto de condados o zonas aledañas a la ciudad de Danville; incluyendo a esta) y todos sus planes tienden a ser frustrados por Perry el Ornitorrinco."

etiquetaMusica.src="./audio/audio1_malvadosYasociados.mp3"


etiquetaImagen.classList.replace('w-100' , 'w-50')
etiquetaImagen.classList.add('ms-5')

//2.3 controlar es agregar estilos
etiquetaTitulo.classList.add("fuenteDufen" , "alineado")

//2.4 controlar es remover estilos
etiquetaSinopsis.classList.remove("text-danger")

//2.5 controlar es detectar eventos
let etiquetaBoton=document.getElementById("btnCambiar")
etiquetaBoton.addEventListener("click",function(evento){
    
}) //el segundo acto aparte del evento "click" , es una accion es una funcion un pequeño evento que hace una pequeña tarea con los parametros que se le introduscan.