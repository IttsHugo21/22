/**
 * Hugo Pérez Barbershop - Scripts de Interactividad
 * Este archivo añade funcionalidades de navegación y animaciones suaves.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Desplazamiento suave (Smooth Scroll) para los enlaces internos
    const menuLinks = document.querySelectorAll('a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Si el enlace es solo "#", no hacer nada
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Animación de aparición al hacer scroll (Reveal Effect)
    const revealElements = document.querySelectorAll('[style*="background-color: #111114"]');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.6s ease-out';
            }
        });
    };

    // Configuración inicial para la animación
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });

    window.addEventListener('scroll', revealOnScroll);
    
    // Ejecutar una vez al cargar por si hay elementos ya visibles
    revealOnScroll();

    // 3. Log de confirmación
    console.log("Hugo Pérez Barbershop - Interactividad cargada correctamente.");
});