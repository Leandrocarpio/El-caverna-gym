// =============================================================================
// MAIN.JS - Punto de entrada principal
// =============================================================================
// Orquesta la inicialización de la aplicación
// Arquitectura: Separación de responsabilidades con ES Modules
// ACTUALIZADO: Incluye inicialización del lightbox
// =============================================================================

import { UI } from './ui.js';
import { CarouselManager } from './carousel.js';
import { AnimationManager } from './animations.js';

// =============================================================================
// INICIALIZACIÓN
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('🏋️ El Caverna Gym - Inicializando...');
  inicializarApp();
});

/**
 * Función principal de inicialización
 */
function inicializarApp() {
  try {
    // 1. Configurar navegación
    configurarNavegacion();
    
    // 2. Inicializar carruseles
    CarouselManager.inicializarCarruseles();
    
    // 3. Configurar animaciones
    AnimationManager.inicializarAnimaciones();
    
    // 4. Inicializar contador de estadísticas
    AnimationManager.inicializarContador();
    
    // 5. Inicializar lightbox de galería
    UI.inicializarLightbox();
    
    console.log('✅ Aplicación inicializada correctamente');
  } catch (error) {
    console.error('❌ Error al inicializar:', error);
  }
}

// =============================================================================
// NAVEGACIÓN
// =============================================================================

/**
 * Configura la navegación suave y el comportamiento del navbar
 */
function configurarNavegacion() {
  // Smooth scroll para enlaces internos
  UI.configurarScrollSuave();
  
  // Efecto navbar al hacer scroll
  UI.aplicarEfectoNavbar();
  
  // Cerrar menú mobile al hacer click en link
  UI.cerrarMenuMobile();
}

// =============================================================================
// EXPORTACIONES
// =============================================================================

export { inicializarApp };