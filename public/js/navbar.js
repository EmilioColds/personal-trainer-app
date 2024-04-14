document.addEventListener('DOMContentLoaded', (event) => {
    const homeLink = document.getElementById('homeLink');
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/';
    });

    
});