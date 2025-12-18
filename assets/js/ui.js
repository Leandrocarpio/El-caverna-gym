// =============================================================================
// UI.JS - Módulo de interfaz de usuario
// =============================================================================
// Responsable de toda la manipulación del DOM y efectos visuales
// NUEVO: Incluye sistema de Lightbox para galería
// =============================================================================

export class UI {
  
  // ===========================================================================
  // NAVEGACIÓN
  // ===========================================================================
  
  /**
   * Configura scroll suave para todos los enlaces internos
   */
  static configurarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      });
    });
  }
  
  /**
   * Aplica efecto de cambio al navbar cuando se hace scroll
   */
  static aplicarEfectoNavbar() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  /**
   * Cierra el menú mobile al hacer click en un link
   */
  static cerrarMenuMobile() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }
  
  // ===========================================================================
  // LIGHTBOX GALLERY
  // ===========================================================================
  
  /**
   * Inicializa el sistema de lightbox para la galería
   */
  static inicializarLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImage');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const counter = document.getElementById('lightboxCounter');
    
    if (!modal || !modalImg) return;
    
    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => ({
      src: item.querySelector('img').src,
      alt: item.querySelector('img').alt
    }));
    
    /**
     * Abre el lightbox con la imagen seleccionada
     */
    const openLightbox = (index) => {
      currentIndex = index;
      modalImg.src = images[currentIndex].src;
      modalImg.alt = images[currentIndex].alt;
      counter.textContent = `${currentIndex + 1} / ${images.length}`;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    
    /**
     * Cierra el lightbox
     */
    const closeLightbox = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };
    
    /**
     * Navega a la imagen anterior
     */
    const showPrev = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex].src;
      modalImg.alt = images[currentIndex].alt;
      counter.textContent = `${currentIndex + 1} / ${images.length}`;
    };
    
    /**
     * Navega a la imagen siguiente
     */
    const showNext = () => {
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex].src;
      modalImg.alt = images[currentIndex].alt;
      counter.textContent = `${currentIndex + 1} / ${images.length}`;
    };
    
    // Event Listeners
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => openLightbox(index));
    });
    
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    
    // Cerrar al hacer click fuera de la imagen
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLightbox();
      }
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
    
    console.log('🖼️ Lightbox inicializado');
  }
  
  // ===========================================================================
  // UTILIDADES
  // ===========================================================================
  
  /**
   * Scroll suave a una sección específica
   * @param {string} selector - Selector CSS de la sección destino
   */
  static scrollSuaveA(selector) {
    const elemento = document.querySelector(selector);
    if (elemento) {
      elemento.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
  
  /**
   * Debounce function para optimizar eventos frecuentes
   * @param {Function} func - Función a ejecutar
   * @param {number} wait - Tiempo de espera en ms
   * @returns {Function}
   */
  static debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}