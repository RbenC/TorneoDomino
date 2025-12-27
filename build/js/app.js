function toggleAccordion(contentId, headerElement) {
            const content = document.getElementById(contentId);
            
            // 1. Alternar la clase 'open' en el contenido
            // Esto dispara la transición suave de max-height
            content.classList.toggle('open');
            
            // 2. Alternar la clase 'active' en el encabezado (para rotar la flecha)
            headerElement.classList.toggle('active');
        }