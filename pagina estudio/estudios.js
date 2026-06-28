// ================= CONTROL DEL CARRUSEL DE 6 IMÁGENES =================
let currentSlideIndex = 0;
const totalSlides = 6;

function moveCarousel(direction) {
    const track = document.getElementById("carouselTrack");
    
    currentSlideIndex += direction;
    
    // Control de bucle infinito de los slides
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    // Desplazamiento exacto basado en porcentaje
    const translationValue = -(currentSlideIndex * 100) / totalSlides;
    track.style.transform = `translateX(${currentSlideIndex * -100}%)`;
}


// ================= CONTROL INTERACTIVO DEL MODAL (ZOOM CERTIFICADOS) =================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalTargetImg");
const captionText = document.getElementById("modalCaption");

// Captura todas las imágenes de los certificados y les asigna el evento de clic
const images = document.querySelectorAll('.zoom-img');
images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Utiliza el texto alternativo como descripción en el zoom
    }
});

// Cierra el visualizador
function closeModal() {
    modal.style.display = "none";
}