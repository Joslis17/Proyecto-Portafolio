document.addEventListener('DOMContentLoaded', () => {

    // Seleccionar elementos del Documento 

    const carousel = document.querySelector(".contact-padre");
    const proyect = document.querySelectorAll(".contact");

    const puntosCarousel =document.querySelector(".carousel-nav");

    const btnPrev = document.querySelector(".carousel-btn.prev");
    const btnNext = document.querySelector(".carousel-btn.next");

    // Variables de estado

    let indiceActual = 0; // muestra el proyecto como un Arrays
    let AnchoTile = 100; // 100 significa que cada proyecto ocupa el 100% del espacio visible

    proyect.forEach((_, index) => {
        const punto =document.createElement('div');
        punto.classList.add('carousel-punto');
        if(index === 0) punto.classList.add('active');
        punto.addEventListener('click', () => goToSlide(index));
        puntosCarousel.appendChild(punto);
    })

    const puntos = document.querySelectorAll('.carousel-punto');

    //Mostrar el primer tile al inicio

    proyect[0].classList.add('active') // muestra el primer proyecto con la clase 'active'


    const vista = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 } );

    proyect.forEach(tile => {
        vista.observe(tile);
    });
    
    // Funcion principal para mover el carrusel
    function goToSlide(index) {
        //Ajustar indice si se pasa de los Limites

        if(index < 0){
            index = proyect.length -1; // Si es menor que 0, va al último
        }else if( index >= proyect.length) {
            index = 0; // si pasa del ultimo, vulve al primero
        }

        // Mover el carousel Horizontalmente

        carousel.style.transform = `translateX(-${index * AnchoTile}%)`;

        // Actualizar el índice actual

        puntos.forEach((punto, i) => {
            punto.classList.toggle('active', i === index);
        });
        
        indiceActual = index;
    }

    // Eventos para los botones de flecha

    btnPrev.addEventListener( 'click', () => {
        goToSlide(indiceActual - 1);
    });

    btnNext.addEventListener( 'click', () => {
        goToSlide(indiceActual + 1);
    });


    // Navegacion con los teclados
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(indiceActual - 1);
        } 
        else if (e.key === 'ArrowRight') {
            goToSlide(indiceActual + 1);
        }
    } );

});


//  document.addEventListener('DOMContentLoaded', () => {
//             const track = document.querySelector('.contact-padre');
//             const tiles = document.querySelectorAll('.contact');
//             const dotsContainer = document.querySelector('.carousel-nav');
//             const prevBtn = document.querySelector('.carousel-btn.prev');
//             const nextBtn = document.querySelector('.carousel-btn.next');
            
//             let currentIndex = 0;
//             const tileWidth = 100; // Porcentaje del ancho del viewport
            
//             // Crear puntos de navegación
//             tiles.forEach((_, index) => {
//                 const dot = document.createElement('div');
//                 dot.classList.add('carousel-dot');
//                 if (index === 0) dot.classList.add('active');
//                 dot.addEventListener('click', () => goToSlide(index));
//                 dotsContainer.appendChild(dot);
//             });
            
//             const dots = document.querySelectorAll('.carousel-dot');
            
//             // Inicializar el primer tile
//             tiles[0].classList.add('active');
            
//             // Animación de aparición para los tiles
//             const observer = new IntersectionObserver((entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('active');
//                     }
//                 });
//             }, { threshold: 0.1 });
            
//             tiles.forEach(tile => {
//                 observer.observe(tile);
//             });
            
//             // Función para mover el carrusel
//             function goToSlide(index) {
//                 // Asegurarse de que el índice esté dentro de los límites
//                 if (index < 0) {
//                     index = tiles.length - 1;
//                 } else if (index >= tiles.length) {
//                     index = 0;
//                 }
                
//                 // Mover el track
//                 track.style.transform = `translateX(-${index * tileWidth}%)`;
                
//                 // Actualizar los puntos de navegación
//                 dots.forEach((dot, i) => {
//                     dot.classList.toggle('active', i === index);
//                 });
                
//                 currentIndex = index;
//             }
            
//             // Event listeners para los botones
//             prevBtn.addEventListener('click', () => {
//                 goToSlide(currentIndex - 1);
//             });
            
//             nextBtn.addEventListener('click', () => {
//                 goToSlide(currentIndex + 1);
//             });
            
//             // Navegación con teclado
//             document.addEventListener('keydown', (e) => {
//                 if (e.key === 'ArrowLeft') {
//                     goToSlide(currentIndex - 1);
//                 } else if (e.key === 'ArrowRight') {
//                     goToSlide(currentIndex + 1);
//                 }
//             });
            
//             // Navegación táctil para dispositivos móviles
//             let touchStartX = 0;
//             let touchEndX = 0;
            
//             track.addEventListener('touchstart', (e) => {
//                 touchStartX = e.changedTouches[0].screenX;
//             }, { passive: true });
            
//             track.addEventListener('touchend', (e) => {
//                 touchEndX = e.changedTouches[0].screenX;
//                 handleSwipe();
//             }, { passive: true });
            
//             function handleSwipe() {
//                 const difference = touchStartX - touchEndX;
//                 if (difference > 50) { // Deslizamiento a la izquierda
//                     goToSlide(currentIndex + 1);
//                 } else if (difference < -50) { // Deslizamiento a la derecha
//                     goToSlide(currentIndex - 1);
//                 }
//             }
            
//             // Autoplay opcional (descomentar para activar)
//             /*
//             let autoplay = setInterval(() => {
//                 goToSlide(currentIndex + 1);
//             }, 5000);
            
//             track.addEventListener('mouseenter', () => {
//                 clearInterval(autoplay);
//             });
            
//             track.addEventListener('mouseleave', () => {
//                 autoplay = setInterval(() => {
//                     goToSlide(currentIndex + 1);
//                 }, 5000);
//             });
//             */
//         });