// =============================================================================
// ANIMATIONS.JS - Módulo de animaciones y efectos visuales
// =============================================================================
// Maneja todas las animaciones, transiciones y efectos visuales
// =============================================================================

export class AnimationManager {
  
  /**
   * Inicializa todas las animaciones de la página
   */
  static inicializarAnimaciones() {
    this.animarAlScroll();
    console.log('✨ Animaciones configuradas');
  }
  
  // ===========================================================================
  // ANIMACIONES AL SCROLL
  // ===========================================================================
  
  /**
   * Aplica animaciones cuando los elementos entran en el viewport
   * Utiliza IntersectionObserver para mejor performance
   */
  static animarAlScroll() {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('animate-in');
            // Desconectar después de animar para mejor performance
            observador.unobserve(entrada.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observar elementos que queremos animar
    const elementos = document.querySelectorAll(
      '.card, .stat-item, .sucursal-card, .accordion-item'
    );
    
    elementos.forEach(el => {
      observador.observe(el);
    });
  }
  
  // ===========================================================================
  // CONTADOR DE ESTADÍSTICAS
  // ===========================================================================
  
  /**
   * Inicializa el contador animado de estadísticas
   */
  static inicializarContador() {
    const estadisticasSection = document.getElementById('estadisticas');
    
    if (!estadisticasSection) return;
    
    let contadorIniciado = false;
    
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting && !contadorIniciado) {
            contadorIniciado = true;
            this.animarContadores();
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    observador.observe(estadisticasSection);
  }
  
  /**
   * Anima los números del contador
   */
  static animarContadores() {
    const contadores = document.querySelectorAll('.stat-number');
    
    contadores.forEach(contador => {
      const target = parseInt(contador.getAttribute('data-target'));
      const duracion = 2000; // 2 segundos
      const incremento = target / (duracion / 16); // 60 FPS
      let actual = 0;
      
      const actualizarContador = () => {
        actual += incremento;
        
        if (actual < target) {
          contador.textContent = Math.floor(actual);
          requestAnimationFrame(actualizarContador);
        } else {
          contador.textContent = target;
          
          // Agregar "+" si el número lo requiere
          if (target >= 100) {
            contador.textContent = `+${target}`;
          }
        }
      };
      
      actualizarContador();
    });
  }
  
  // ===========================================================================
  // UTILIDADES DE ANIMACIÓN
  // ===========================================================================
  
  /**
   * Fade in de un elemento
   * @param {HTMLElement} elemento - Elemento a animar
   * @param {number} duracion - Duración en ms
   */
  static fadeIn(elemento, duracion = 300) {
    elemento.style.opacity = 0;
    elemento.style.display = 'block';
    
    let inicio = null;
    
    const animar = (timestamp) => {
      if (!inicio) inicio = timestamp;
      const progreso = timestamp - inicio;
      
      elemento.style.opacity = Math.min(progreso / duracion, 1);
      
      if (progreso < duracion) {
        requestAnimationFrame(animar);
      }
    };
    
    requestAnimationFrame(animar);
  }
  
  /**
   * Fade out de un elemento
   * @param {HTMLElement} elemento - Elemento a animar
   * @param {number} duracion - Duración en ms
   */
  static fadeOut(elemento, duracion = 300) {
    let inicio = null;
    
    const animar = (timestamp) => {
      if (!inicio) inicio = timestamp;
      const progreso = timestamp - inicio;
      
      elemento.style.opacity = Math.max(1 - (progreso / duracion), 0);
      
      if (progreso < duracion) {
        requestAnimationFrame(animar);
      } else {
        elemento.style.display = 'none';
      }
    };
    
    requestAnimationFrame(animar);
  }
  
  /**
   * Slide down de un elemento
   * @param {HTMLElement} elemento - Elemento a animar
   * @param {number} duracion - Duración en ms
   */
  static slideDown(elemento, duracion = 300) {
    elemento.style.height = '0';
    elemento.style.overflow = 'hidden';
    elemento.style.display = 'block';
    
    const altura = elemento.scrollHeight;
    let inicio = null;
    
    const animar = (timestamp) => {
      if (!inicio) inicio = timestamp;
      const progreso = timestamp - inicio;
      
      elemento.style.height = Math.min((progreso / duracion) * altura, altura) + 'px';
      
      if (progreso < duracion) {
        requestAnimationFrame(animar);
      } else {
        elemento.style.height = 'auto';
        elemento.style.overflow = 'visible';
      }
    };
    
    requestAnimationFrame(animar);
  }
}