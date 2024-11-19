// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const lines = document.querySelectorAll(".text-line");

window.addEventListener("scroll", () => {
    lines.forEach((line, index) => {
        const linePosition = line.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Check if the line is near the center of the viewport
        if (linePosition < viewportHeight * 0.6 && linePosition > viewportHeight * 0.4) {
            highlightLine(index);
        }
    });
});

function highlightLine(index) {
    lines.forEach((line, i) => {
        line.classList.toggle("active", i === index);
    });
}