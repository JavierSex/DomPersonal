let etiquetaImagen=document.getElementById("fotografia")

let etiquetaTitulo=document.getElementById("titulo")

let etiquetaSinopsis=document.getElementById("sinopsis")

let etiquetaMusica=document.getElementById("musica")

let etiquetaMenu=document.getElementById("menu")

let etiquetaBoton=document.getElementById("btnCambiar")

bandera=0

etiquetaBoton.addEventListener("click",function(evento){


    if (bandera==0){

        etiquetaImagen.src="./img/agenteP.png"

        etiquetaMenu.classList.replace('menuPhineasyFerb' , 'menuPerry')

        etiquetaSinopsis.classList.remove("text-danger")

        etiquetaTitulo.classList.add("fuentePerry")

        etiquetaMusica.src="./audio/y2mate.com - Perry El Ornitorrinco  Letra.mp3"

        etiquetaTitulo.textContent="Perry el ornitorrinco (Agente P)"

        etiquetaSinopsis.textContent="Perry es la mascota de Phineas y Ferb que lleva una doble vida como agente secreto. Vive con Phineas y Ferb desde que los chicos eran pequeños y sus padres los llevaron a comprar una mascota. De todos los animales que se encontraban en la tienda se decidieron por él, porque la orientación de sus ojos hacía que mirara a Phineas y Ferb al mismo tiempo. En un principio iban a llamarlo Bartholomé, pero luego decidieron llamarlo Perry. Como agente secreto trabaja para el Mayor Monograma. Su principal objetivo es derrotar al malvado Dr. Doofenshmirtz o Heinz Doofenshmirtz impidiendo que lleve a cabo sus descabellados y malvados planes, que siempre terminan haciendo desaparecer accidentalmente las invenciones de Phineas y Ferb, haciendo que Candace no pueda acusar a sus hermanos de hacer inventos increíbles."

        bandera=bandera+1

    } else if(bandera==1){

        etiquetaImagen.src="./img/dufenchsmirz.png"

        etiquetaMenu.classList.replace("menuPerry","menuDufen")

        etiquetaTitulo.classList.replace("fuentePerry","fuenteDufen")

        etiquetaMusica.src="./audio/y2mate.com - Doofenshmirtz Malvados y Asociados.mp3"

        etiquetaTitulo.textContent="Dr. Heinz Doofenshmirtz"

        etiquetaSinopsis.textContent="Es el enemigo de Perry el Ornitorrinco, y la gran mayoría de los episodios incluyen una secuencia en la que Perry detiene uno de sus planes para apoderarse del área limítrofe. En un episodio Doofenshmirtz encuentra a otro enemigo, el agente Peter el Panda, lo que hace que Perry se sienta reemplazado. Ambos terminan en una parodia del show del Dr. Phil, con la finalidad de recibir orientación para superar la situación. Doofenshmirtz también ha declarado que Perry es su mejor amigo, y es aparentemente recíproco, ya que Perry ha terminado ayudándolo en varias ocasiones, como cuando le ayuda a hacer de DJ para enorgullecer a Vanessa; pero luchan entre sí porque están de lados diferentes."

        bandera=bandera+1
    } else {
        etiquetaImagen.src="./img/Pineasyferb.png"

        etiquetaMenu.classList.replace("menuDufen","menumenuPhineasyFerb")

        etiquetaSinopsis.classList.add("text-danger")

        etiquetaTitulo.textContent=""

        etiquetaSinopsis.textContent="La serie sigue las aventuras de los hermanastros Phineas Flynn (Vincent Martella) y Ferb Fletcher (Thomas Sangster), que viven en la ciudad ficticia de Danville, en un área (nunca especificada) del Tri-State (los Tres Estados), ya que buscan formas de ocupar su tiempo durante sus vacaciones de verano. Estas aventuras suelen involucrar proyectos de construcción elaborados, de tamaño natural y ostensiblemente peligrosos. La hermana mayor de Phineas, Candace Flynn (Ashley Tisdale), tiene dos obsesiones: que su madre Linda Flynn (Caroline Rhea) pille a Phineas y Ferb y los castigue, y atraer la atención de un chico llamado Jeremy (Mitchel Musso) de quien está enamorada."

        bandera=0
    }

})