document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.querySelector('.delete-button');
    if (deleteButton) {
        deleteButton.addEventListener('click', async () => {
            const routineId = deleteButton.getAttribute('data-routine-id');
            const response = await fetch(`/api/routine/${routineId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('Routine deleted successfully!');
                window.location.href = '/'; // Redirige a la homepage o a otra página
            } else {
                alert('Failed to delete the routine.');
            }
        });
    }
});