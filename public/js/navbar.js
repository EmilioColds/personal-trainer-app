document.addEventListener('DOMContentLoaded', () => {
  
    const routineLink = document.getElementById('routineLink');
    routineLink.addEventListener('click', (e) => {
        e.preventDefault();
        fetch('/api/userRoutes/session')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Not logged in');
                }
            })
            .then(data => {
                if (data.loggedIn) {
                    window.location.href = '/routine';
                } else {
                    window.location.href = '/login';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                window.location.href = '/login';
            });
    });
  });