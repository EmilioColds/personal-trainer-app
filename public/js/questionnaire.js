document.addEventListener('DOMContentLoaded', () => {
    const createRoutineLink = document.getElementById('createRoutineLink');
    if (createRoutineLink) {
        createRoutineLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento predeterminado de enlace
            // Aquí puedes agregar la lógica para verificar si el usuario está autenticado
            // Si lo está, redirige al cuestionario; si no, al login/signup
            if (localStorage.getItem('loggedIn')) {
                window.location.href = '/questionnaire';
            } else {
                alert('You need to be logged in to create a routine');
                window.location.href = '/login';
            }
        });
    }
});