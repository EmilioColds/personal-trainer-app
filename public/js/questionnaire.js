document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionnaireForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => { data[key] = value; });

        const response = await fetch('/api/questionnaire', { //CHECAR LA RUTA DE ESE FETCH
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Routine created successfully!');
            window.location.href = '/routine';
        } else {
            const errorData = await response.json();
            alert(errorData.message);
        }
    });
});