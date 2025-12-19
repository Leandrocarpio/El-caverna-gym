# 🏋️ El Caverna Gym - Landing Page Profesional

> Landing page moderna para gimnasios. Arquitectura modular ES6, psicología de colores aplicada y diseño responsive mobile-first optimizado.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen)
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

---

## 🚀 Demo en Vivo

**[Ver Demo →](https://leandrocarpio.github.io/el-caverna-gym-landing/)**

![Hero El Caverna Gym](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Arquitectura](#️-arquitectura)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características Técnicas](#-características-técnicas)
- [Cómo Replicar](#-cómo-replicar-este-proyecto)
- [Roadmap](#️-roadmap)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 🎯 Descripción

**El Caverna Gym** es una landing page profesional desarrollada para un gimnasio real en Godoy Cruz, Mendoza. Este proyecto forma parte de mi portfolio profesional y demuestra implementación de arquitectura frontend moderna, psicología de colores aplicada al nicho fitness y diseño UX/UI optimizado para conversión.

### 🎯 Objetivos del Proyecto

- **Para reclutadores:** Código limpio, arquitectura modular y buenas prácticas
- **Para clientes:** Diseño impactante con alta conversión
- **Para desarrolladores:** Código documentado y replicable

### ✨ Características Destacadas

- ✅ **Hero full-screen sin overlay** → Imagen pura con text-shadow reforzado para legibilidad
- ✅ **Testimonios premium** → Avatares reales + flechas fuera del contenido
- ✅ **Psicología de colores** → Rojo (acción/urgencia) + Azul oscuro (confianza)
- ✅ **Carruseles optimizados** → Galería + Testimonios con Bootstrap 5
- ✅ **Contador animado** → IntersectionObserver para activación al scroll
- ✅ **WhatsApp flotante** → CTA directo con tooltip hover
- ✅ **Responsive real** → Mobile-first, touch targets 44px+

---

## 🎨 Características

### Diseño y UX
- ✅ Hero full-screen con imagen pura (sin overlay oscuro)
- ✅ Diseño responsive mobile-first
- ✅ Menú hamburguesa animado
- ✅ Smooth scroll entre secciones
- ✅ Animaciones con IntersectionObserver
- ✅ Micro-interacciones en hover

### Funcionalidades
- ✅ Catálogo de 8 actividades (Musculación, Funcional, Boxeo, GAP, Zumba, etc.)
- ✅ Galería de instalaciones (carrusel Bootstrap)
- ✅ Testimonios con avatares reales (carrusel con 10 reviews)
- ✅ FAQ con accordion
- ✅ 2 Sucursales con mapas integrados (Google Maps)
- ✅ Footer con redes sociales
- ✅ WhatsApp flotante con mensaje pre-cargado

### Performance y SEO
- ✅ Lazy loading de imágenes
- ✅ CSS optimizado con variables
- ✅ JavaScript modular ES6 (mejor caching)
- ✅ Meta tags completos (Open Graph)
- ✅ HTML semántico
- ✅ Touch targets accesibles

---

## 🛠️ Tecnologías

### Frontend
- **HTML5** → Estructura semántica y SEO
- **CSS3** → Variables, Grid, Flexbox, `clamp()` para responsive
- **JavaScript ES6+** → Modules, Classes, Arrow Functions, IntersectionObserver

### Framework/Librerías
- **Bootstrap 5.3.0** → Grid system, carruseles, accordion
- **Bootstrap Icons** → Iconografía profesional
- **Google Fonts** → Montserrat + Open Sans
- **Unsplash** → Imágenes de alta calidad

### Herramientas
- **Git** → Control de versiones
- **GitHub Pages** → Hosting gratuito
- **Live Server** → Desarrollo local

---

## 🗂️ Arquitectura

El proyecto implementa **separación de responsabilidades** con ES6 Modules:

```
┌─────────────────────────────────────────┐
│           index.html                    │
│  (Estructura y contenido estático)      │
└──────────────┬──────────────────────────┘
               │
       ┌───────┴────────┐
       │   main.js      │ ← Punto de entrada
       └───────┬────────┘
               │
   ┌───────────┼───────────────┐
   │           │               │
┌──▼───┐   ┌───▼────┐   ┌─────▼──────┐
│ui.js │   │carousel│   │animations  │
└──────┘   │.js     │   │.js         │
  │        └────────┘   └────────────┘
  │            │              │
  ▼            ▼              ▼
 DOM      Carruseles    IntersectionObserver
Navbar   (Galería +     Contador animado
Scroll   Testimonios)   Fade-in elements
```

### Módulos

#### 📄 `main.js`
- Inicializa la aplicación
- Coordina todos los módulos
- Configura navegación

#### 🎨 `ui.js`
- Smooth scroll interno
- Efecto navbar al scroll
- Cierre automático menú mobile
- Utilidades DOM

#### 🎠 `carousel.js`
- Inicializa carruseles de Bootstrap
- Lazy loading de imágenes
- Pausar al hover (opcional)

#### ✨ `animations.js`
- IntersectionObserver para fade-in
- Contador animado de estadísticas
- Utilidades de animación (fadeIn, fadeOut)

---

## 📦 Instalación

### Requisitos Previos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (Live Server, Python o Node.js)

> ⚠️ **Importante:** Los ES Modules requieren servidor HTTP. No abrir `index.html` directamente.

### Opción 1: Live Server (Recomendada)

```bash
# 1. Clonar repositorio
git clone https://github.com/leandrocarpio/El-caverna-gym.git

# 2. Abrir con VS Code
cd El-caverna-gym
code .

# 3. Instalar extensión "Live Server"
# 4. Click derecho en index.html → "Open with Live Server"
```

### Opción 2: Python

```bash
# Clonar y navegar
git clone https://github.com/leandrocarpio/El-caverna-gym.git
cd El-caverna-gym

# Iniciar servidor
python -m http.server 8000

# Abrir: http://localhost:8000
```

### Opción 3: Node.js

```bash
# Instalar http-server (una sola vez)
npm install -g http-server

# Iniciar servidor
http-server

# Abrir: http://localhost:8080
```

---

## 📁 Estructura del Proyecto

```
el-caverna-gym/
│
├── index.html              # Página principal
├── styles.css              # Estilos globales optimizados
├── README.md               # Documentación
├── LICENSE                 # Licencia MIT
│
└── assets/
    ├── img/
    │   ├── Logo/
    │   │   └── Logo.png
    │   ├── Actividades/    # 8 imágenes
    │   ├── Productos/      # 3 imágenes
    │   └── Galeria/        # 4 fotos instalaciones
    │
    └── js/
        ├── main.js         # Punto de entrada
        ├── ui.js           # Módulo interfaz
        ├── carousel.js     # Gestión carruseles
        └── animations.js   # Animaciones y efectos
```

---

## 🔥 Características Técnicas

### 1️⃣ Hero sin Overlay

**Problema resuelto:** El overlay oscurecía demasiado la imagen de fondo.

```css
/* ❌ ANTES (con overlay oscuro) */
.hero-fullscreen {
  background: linear-gradient(rgba(29, 53, 87, 0.7), rgba(230, 57, 70, 0.6)), 
              url('image.jpg');
}

/* ✅ DESPUÉS (imagen pura + text-shadow reforzado) */
.hero-fullscreen {
  background: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48') center/cover;
  background-attachment: fixed;
}

.hero-title {
  text-shadow: 
    3px 3px 6px rgba(0, 0, 0, 0.8),      /* Sombra principal */
    -1px -1px 3px rgba(0, 0, 0, 0.6),    /* Contorno */
    0 0 30px rgba(0, 0, 0, 0.5);         /* Glow exterior */
}
```

---

### 2️⃣ Psicología de Colores

Implementación estratégica de colores según el nicho fitness:

```css
:root {
  /* Rojo (#E63946) → Energía, urgencia, acción */
  --primary-red: #E63946;
  
  /* Azul oscuro (#1D3557) → Confianza, profesionalismo */
  --primary-dark: #1D3557;
  
  /* Gris claro (#F1FAEE) → Neutralidad, descanso visual */
  --light-bg: #F1FAEE;
}

/* Patrón de fondos alternados */
#actividades { background: var(--white); }
#productos { background: var(--light-bg); }
#galeria { background: var(--white); }
#testimonios { background: var(--light-bg); }
#faq { background: var(--white); }
#sucursales { background: var(--light-bg); }
```

**Botones CTAs:**
```css
.btn-primary {
  background: linear-gradient(135deg, #E63946 0%, #C1121F 100%);
  border-radius: 50px;
  box-shadow: 0 6px 20px rgba(230, 57, 70, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 50px rgba(230, 57, 70, 0.25);
}
```

---

### 3️⃣ Testimonios Premium con Avatares

**Características:**
- Avatares reales desde `https://i.pravatar.cc/`
- Flechas **fuera del contenido** (no tapan texto)
- Layout flexible (horizontal en desktop, vertical en mobile)
- Comilla decorativa gigante

```html
<div class="testimonial-card-carousel">
  <div class="testimonial-quote-icon">"</div>
  
  <div class="testimonial-avatar">
    <img src="https://i.pravatar.cc/80?img=12" alt="Avatar Martín R.">
  </div>
  
  <div class="testimonial-content">
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-text">¡El mejor gym de Godoy Cruz!...</p>
    <h6 class="testimonial-author"><strong>Martín R.</strong></h6>
  </div>
</div>
```

```css
/* Flechas FUERA del contenido */
#testimoniosCarousel { padding: 0 80px; }

.testimonial-carousel-prev { left: -60px; }
.testimonial-carousel-next { right: -60px; }

/* Ocultar flechas en mobile (solo swipe) */
@media (max-width: 991px) {
  .testimonial-carousel-prev,
  .testimonial-carousel-next {
    display: none;
  }
  
  #testimoniosCarousel { padding: 0; }
}
```

---

### 4️⃣ Responsive Mobile-First

```css
/* 1. Base: Mobile (< 576px) */
.hero-title { 
  font-size: clamp(1.8rem, 6vw, 3.5rem); 
}

.carousel-img { 
  height: 280px; 
  object-fit: contain; /* Evita deformación */
}

/* 2. Tablet (≥ 768px) */
@media (min-width: 768px) {
  .carousel-img { height: 350px; }
  
  .testimonial-card-carousel {
    flex-direction: row; /* Horizontal */
    text-align: left;
  }
}

/* 3. Desktop (≥ 992px) */
@media (min-width: 992px) {
  .carousel-img { height: 500px; }
  
  .testimonial-carousel-prev,
  .testimonial-carousel-next {
    display: block; /* Mostrar flechas */
  }
}
```

---

### 5️⃣ Contador Animado con IntersectionObserver

```javascript
// Activar contador solo al hacer scroll a la sección
static inicializarContador() {
  const estadisticasSection = document.getElementById('estadisticas');
  
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting && !contadorIniciado) {
        contadorIniciado = true;
        this.animarContadores(); // Animar de 0 a valor final
      }
    });
  }, { threshold: 0.3 });
  
  observador.observe(estadisticasSection);
}

// Animación suave con requestAnimationFrame
static animarContadores() {
  const contadores = document.querySelectorAll('.stat-number');
  
  contadores.forEach(contador => {
    const target = parseInt(contador.getAttribute('data-target'));
    const incremento = target / (2000 / 16); // 2 segundos a 60 FPS
    let actual = 0;
    
    const actualizarContador = () => {
      actual += incremento;
      
      if (actual < target) {
        contador.textContent = Math.floor(actual);
        requestAnimationFrame(actualizarContador);
      } else {
        contador.textContent = target;
      }
    };
    
    actualizarContador();
  });
}
```

---

## 🎨 Cómo Replicar este Proyecto

### 1. Clonar y personalizar

```bash
git clone https://github.com/leandrocarpio/El-caverna-gym.git
cd El-caverna-gym
```

### 2. Cambiar contenido

**Hero:**
```html
<!-- index.html línea 45-50 -->
<h1 class="hero-title">TU FRASE MOTIVACIONAL</h1>
<p class="hero-subtitle">Tu subtítulo</p>
```

**Actividades:**
- Reemplazar imágenes en `assets/img/Actividades/`
- Actualizar títulos y descripciones en `index.html` línea 60-150

**Testimonios:**
- Cambiar nombres y textos en `index.html` línea 280-380
- Los avatares se cargan automáticamente desde `pravatar.cc`

### 3. Personalizar colores

```css
/* styles.css línea 3-15 */
:root {
  --primary-red: #TU_COLOR_PRIMARIO;      /* Botones, CTAs */
  --primary-dark: #TU_COLOR_SECUNDARIO;   /* Navbar, footer */
  --light-bg: #TU_COLOR_FONDO;            /* Secciones alternadas */
}
```

### 4. Ajustar WhatsApp y redes sociales

```html
<!-- index.html línea 550: Cambiar número -->
<a href="https://wa.me/TU_NUMERO?text=Hola..." 
   class="whatsapp-float">
```

```html
<!-- Footer: Actualizar links de redes sociales -->
<a href="https://www.instagram.com/TU_USUARIO">Instagram</a>
<a href="https://www.facebook.com/TU_PAGINA">Facebook</a>
```

### 5. Cambiar créditos del footer

```html
<!-- index.html línea 600 -->
<p class="footer-credits">
  Diseñado por <a href="https://github.com/TU_USUARIO">Tu Nombre</a>
</p>
```

---

## 🗺️ Roadmap

### Versión 2.0 - Mejoras Futuras

- [ ] Sistema de reservas online con formulario
- [ ] Blog de noticias fitness
- [ ] Panel de administración para gestionar contenido
- [ ] Integración con MercadoPago para pagos
- [ ] Galería lightbox (modal fullscreen)
- [ ] PWA (Progressive Web App)
- [ ] Multiidioma (ES/EN)
- [ ] Tests unitarios

---

## 👨‍💻 Autor

**Leandro Carpio**  
Frontend Developer | Landing Pages de Alta Conversión

- 📧 **Email:** leo_gabriel_carpio@hotmail.com
- 📱 **WhatsApp:** [+54 9 261 612-3777](https://wa.me/5492616123777)
- 💼 **LinkedIn:** [linkedin.com/in/leandrocarpio](https://www.linkedin.com/in/leandrocarpio)
- 🌐 **GitHub:** [@leandrocarpio](https://github.com/leandrocarpio)

---

### ¿Necesitás una landing profesional para tu negocio?

**Desarrollo landing pages optimizadas para conversión:**
- ✅ Diseño responsive mobile-first
- ✅ Arquitectura modular escalable
- ✅ Psicología de colores aplicada
- ✅ SEO y performance optimizados

📩 **Contactame:** [WhatsApp](https://wa.me/5492616123777?text=Hola,%20vi%20tu%20proyecto%20El%20Caverna%20Gym%20y%20me%20interesa%20tu%20servicio)

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

```
MIT License

Copyright (c) 2025 Leandro Carpio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

Ver [LICENSE](LICENSE) para más detalles.

---

## 💡 Para Reclutadores

### 🎯 Buenas Prácticas Implementadas

✅ **Arquitectura Modular ES6**
- Separación de responsabilidades clara
- ES Modules para mejor organización
- Código reutilizable y escalable

✅ **Clean Code**
- Nombres descriptivos y semánticos
- Comentarios estratégicos (no obviedades)
- Funciones con responsabilidad única

✅ **Performance Optimizada**
- Lazy loading de imágenes
- IntersectionObserver para animaciones
- CSS con variables (mejor mantenimiento)
- JavaScript modular (mejor caching)

✅ **Responsive Real Mobile-First**
- Touch targets accesibles (44px+)
- Flechas ocultas en mobile (solo swipe)
- Layout adaptativo con Flexbox/Grid

✅ **Accesibilidad Web (WCAG)**
- HTML semántico (`<nav>`, `<section>`, `<footer>`)
- ARIA labels en botones y links
- Contraste de colores AA
- Navegación por teclado funcional

✅ **UX/UI Optimizada**
- Smooth scroll nativo
- Micro-interacciones en hover
- Loading states visuales
- Feedback inmediato al usuario

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella en GitHub

**El Caverna Gym** © 2025 - Diseñado y desarrollado por **Leandro Carpio**

[⬆️ Volver arriba](#️-el-caverna-gym---landing-page-profesional)

</div>
