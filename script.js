function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');
}

function createFallingStars() {
    const body = document.body;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        body.appendChild(star);
    }
}

createFallingStars();
