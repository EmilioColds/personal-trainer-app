document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionnaireForm');
    const beginnerDiv = document.getElementById('beginnerObj');
    const intAdvDiv = document.getElementById('intAdvObj');
    const levelRadioButtons = document.querySelectorAll('input[name="level"]');

    levelRadioButtons.forEach(button => {
        button.addEventListener('change', (event) => {
            const value = event.target.value;
            if (value === 'Beginner') {
                beginnerDiv.classList.remove('hidden');
                intAdvDiv.classList.add('hidden');
            } else if (value === 'Intermediate' || value === 'Advanced') {
                beginnerDiv.classList.add('hidden');
                intAdvDiv.classList.remove('hidden');
            }
        });
    });

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