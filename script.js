document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Posun dolů
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    } else {
        // Posun nahoru
        window.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth'
        });
    }
});

function scrollToSection() {
    document.querySelector('.section:nth-child(2)').scrollIntoView({
        behavior: 'smooth'
    });
}

// Inicializace IntersectionObserver pro sledování druhé sekce
const observer = new IntersectionObserver((entries) => {
    const button = document.querySelector(".scroll-button");
    const text = document.querySelector(".tree-text");

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            button.style.display = "none"; // Skryje tlačítko, když je druhá sekce viditelná
            text.classList.add("hidden"); // Skryje text
        } else {
            button.style.display = "block"; // Zobrazí tlačítko, pokud je druhá sekce mimo zorné pole
            text.classList.remove("hidden"); // Zobrazí text, pokud jsme v první sekci
        }
    });
}, { threshold: 0.1 }); // Prahová hodnota (10 % druhé sekce v zorném poli)

// Sleduje druhou sekci pro změny viditelnosti
observer.observe(document.querySelector('.section:nth-child(2)'));
