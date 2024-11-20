// Navigationseffekte und Scrollen zu den Sektionen
document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        // Sicherstellen, dass der Lebenslauf-Link nicht behandelt wird
        if (!(link.innerHTML === "Lebenslauf (Download)")) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                
                if (link.getAttribute('href') === 'page2.html') {
                    return; // Wenn der Link zu einer anderen Seite führt, nicht weiter machen
                }

                // Glow-Effekt für Navigation
                link.classList.add('nav-glow');
                
                setTimeout(function() {
                    link.classList.remove('nav-glow');
                }, 1000);

                // Scrollen zum Zielbereich
                const targetSection = document.querySelector(link.getAttribute('href'));
                if (targetSection == null) return;
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });

    // Box-Interaktion für Glow-Effekt
    const box = document.getElementById('leuchtendeBox');
    if (box) {
        box.addEventListener('click', function() {
            box.classList.add('glow');
            
            setTimeout(function() {
                box.classList.remove('glow');
            }, 1000);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Beobachtung des Skills-Bereichs
    const skillsSection = document.querySelector('#skills-bar');

    // Funktion, die ausgeführt wird, wenn der Skills-Bereich sichtbar wird
    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Wenn der Abschnitt sichtbar wird, animiere die Skill-Balken
                const skillBars = document.querySelectorAll('.skill-per');
                skillBars.forEach((bar) => {
                    const percentage = bar.getAttribute('per');
                    bar.style.transition = 'max-width 2s ease-out';
                    bar.style.maxWidth = percentage;
                });
                // Den Observer nach der Animation entfernen
                observer.disconnect();
            }
        });
    };

    // Optionen für den IntersectionObserver
    const options = {
        root: null, // Beobachtung im Viewport
        rootMargin: '0px', // Keine zusätzliche Margin
        threshold: 0.5 // Beobachten, wenn 50% des Elements im Viewport sichtbar sind
    };

    // Erstelle den IntersectionObserver
    const observer = new IntersectionObserver(startAnimation, options);

    // Den Observer auf die Skills-Section anwenden
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});
