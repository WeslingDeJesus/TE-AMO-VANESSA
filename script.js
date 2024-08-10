// script.js
const text = `
Bien, esta vez estoy haciendo algo diferente.

El titulo de esta carta es "Futuro", y se me ocurrio que la mejor
manera de escribirtela era asi, en una pagina web.

Es curioso como cambiamos y evolucionamos vida, desde que nos conocemos
hemos cambiado de tantas maneras diferentes. Tantas cosas son distintas hoy,
aun asi estamos aqui juntos y cada dia mas y mas unidos.

Permiteme ser el primero en decirte esto. QUE ORGULLOSO ESTOY DE TI.
De la chica en la que te estas convirtiendo, de las cosas que has logrado
de los muchos momentos en los que has sido fuerte y valiente.
Estoy aqui de manera virtual no solo para felicitarte por tu CUMPLE AÑOS!!!, 
tambien quiero felicitarte por ser tan valiente y por esforzarte tanto cada dia. 

Decidi que esta carta se llamaria futuro porque esta es la sensacion que tengo.

Ahora mismo en lo unico que puedo pensar cada que te miro es en el maravilloso futuro
que veo a tu lado... La maravillosa mujer que encontre es lo unico que puedo ver,
porque cada cosa en ti brilla, y creeme que brillas con intensidad.

Cada dia veo el futuro cercano, donde tu y yo estamos juntos en nuestra casita,
con nuestro bichito, y juntos nos dedicamos a vivir esta nueva aventura. 
Veo el futuro en el que tu y yo somos exitosos, viajamos y somos felices, porque
tu me das esa sensacion. Porque ya soy feliz a tu lado, porque tu me haces querer ser exitoso.
lo veo, te veo a ti.

Recien tienes 27 hoy, y es realmente increible pensar que dentro de poco tiempo seremos 
una pareja de padres jovenes. Pero ¿sabes?... La verdad es que me siento capaz de 
lograrlo, y creo que se debe a ti. Creo que puedo hacer lo que sea cuando estas a mi lado.
Porque nadie me ama como lo haces tu. Nadie me mira como me miras tu. Nadie me anima como lo 
haces tu. 

Asi que hoy quiero felicitarte mor, pero no solo por haberlo hecho increible este año que 
se acaba hoy. Vengo a felicitarte por lo increible que lo haras este año. Vengo a felicitarte
por graduarte. Vengo a felicitarte por ser una madre increible. Por esa gran idea para 
el cumple años numero 5 de bichito. Por el cambio de trabajo. Por ir de viaje a japon. 
Por aprendre a hablar frances. Por cumplir con tus metas del año 2030. Quiero felicitarte
por cuidar tanto tu salud los 5 años que siguen a este. Quiero felicitarte por el gran futuro 
que tendras.

¿Sabes por qué? porque yo lo veo en ti. Veo a una chica que se esfuerza, que tiene metas
que tiene deseos, que intenta superarse. Y ya te vi exitosa en el futuro. Quiero estar contigo
para verte brillar aun mas. Mucho tiempo mas.

Toda mi vida.

Asi que, MUCHAS FELICIDADES MI VIDA. Felicidades por haberlo hecho increible en tus 26, 
por lo genial que lo haras en tus 27. Espero poder darte un dia lindo y que esta pequeña 
carta diferente te guste. Agregala a tu coleccion como un link y cada vez que te sientas mal
que no logres ver tu progreso, abre este link y leelo. Asi recordaras que yo ya te vi triunfando.

Y quien sabe... Quizas un dia al entrar, veas que la carta es diferente. Que tiene algo mas escrito. 

Eso es lo maravilloso del futuro, que siempre puede mejorar. Asi como tu.

Tu eres mi futuro. No existe nadie mas como tu. Eres increible.

Y TE AMO VANESSA ILEANA LOPEZ DEL ROSARIO. Te amo con locura, y pretendo seguirte por el resto de mi vida
porque no hay ningun otro futuro que desee. Solo quiero verte a ti.

De parte de Nuestro bichito, FELIZ CUMPLE AÑOS MAMI. Estoy seguro de que el ya te ama... y ya lo vi orgulloso
presumiendo a su sexy, inteligente, hermosa y exitosa mami. TE AMAMOS VIDA. 





Atentamente,
MITZU... & BICHITO.
`;

let i = 0;
const speed = 40; // Velocidad de escritura (ms)
const letterElement = document.getElementById('letter');
const cardElement = document.querySelector('.card');
const videoElement = document.getElementById('background-video');
const soundButton = document.getElementById('sound-toggle');
const preloader = document.getElementById('preloader');
const audioElement = document.getElementById('background-audio');




function typeWriter() {
    if (i < text.length) {
        letterElement.innerHTML += text.charAt(i);
        i++;
        cardElement.scrollTop = cardElement.scrollHeight;
        setTimeout(typeWriter, speed);
    }
}



window.onload = function() {
    // Ocultar el preloader después de 3 segundos
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(typeWriter, 500); // Comenzar a escribir la carta después de ocultar el preloader
        audioElement.play();
    }, 3000); // Tiempo para mostrar la pantalla de bienvenida
};



