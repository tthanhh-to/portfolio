document.addEventListener('DOMContentLoaded', () => {
    const heroButton = document.querySelector('#hero button');
    if (heroButton) {
        heroButton.addEventListener('click', () => {
            // Smooth scroll to projects section
            const projectsSection = document.getElementById('projects');
            if(projectsSection){
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Example of adding dynamic content (optional)
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      // You could fetch project data from an API or JSON file here
      // and dynamically create project elements.
    }
});
