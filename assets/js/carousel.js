// =============================================================================
// CAROUSEL.JS - Módulo de gestión de carruseles
// =============================================================================
// Maneja la lógica de los carruseles de Bootstrap
// =============================================================================

export class CarouselManager {
  
  /**
   * Inicializa todos los carruseles de la página
   */
  static inicializarCarruseles() {
    this.inicializarGaleria();
    this.inicializarTestimonios();
    
    console.log('📸 Carruseles inicializados');
  }
  
  /**
   * Configura el carrusel de galería
   */
  static inicializarGaleria() {
    const galeriaCarousel = document.getElementById('galeriaCarousel');
    
    if (!galeriaCarousel) return;
    
    // Bootstrap ya maneja el carrusel automáticamente
    // Aquí podríamos agregar lógica adicional si fuera necesario
    
    // Lazy loading de imágenes del carrusel
    this.aplicarLazyLoading(galeriaCarousel);
  }
  
  /**
   * Configura el carrusel de testimonios
   */
  static inicializarTestimonios() {
    const testimoniosCarousel = document.getElementById('testimoniosCarousel');
    
    if (!testimoniosCarousel) return;
    
    // El carrusel de testimonios ya está configurado en el HTML
    // con data-bs-ride="carousel" y data-bs-interval="5000"
    
    // Pausar al hacer hover (opcional)
    testimoniosCarousel.addEventListener('mouseenter', () => {
      const bsCarousel = bootstrap.Carousel.getInstance(testimoniosCarousel);
      if (bsCarousel) {
        bsCarousel.pause();
      }
    });
    
    testimoniosCarousel.addEventListener('mouseleave', () => {
      const bsCarousel = bootstrap.Carousel.getInstance(testimoniosCarousel);
      if (bsCarousel) {
        bsCarousel.cycle();
      }
    });
  }
  
  /**
   * Aplica lazy loading a las imágenes del carrusel
   * @param {HTMLElement} carousel - Elemento del carrusel
   */
  static aplicarLazyLoading(carousel) {
    const imagenes = carousel.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
      // El navegador soporta lazy loading nativo
      return;
    }
    
    // Fallback para navegadores que no soportan lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    imagenes.forEach(img => imageObserver.observe(img));
  }
  
  /**
   * Navega a un slide específico del carrusel
   * @param {string} carouselId - ID del carrusel
   * @param {number} slideIndex - Índice del slide
   */
  static irASlide(carouselId, slideIndex) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const bsCarousel = bootstrap.Carousel.getInstance(carousel);
    if (bsCarousel) {
      bsCarousel.to(slideIndex);
    }
  }
}