const createWorkoutButton = (event) => {
    event.preventDefault();
    document.querySelector("#modal").classList.add("is-active");
};

const saveWorkoutButton = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-id').value.trim();
    const category = document.querySelector('#category').value.trim();
    const body = document.querySelector('#description-id').value.trim();

    if (title && category && body) {
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify({title, category, body}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            document.location.replace('/workouts');
        } else {
            alert('Something went wrong!');
        }
    }
};

const deleteWorkoutButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/workouts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload()
      } else {
        alert('Failed to delete project');
      }
    }
  };

const cancelButton = (event) => {
    document.querySelector('#modal').classList.remove('is-active');
};

document
    .querySelector('#create-button')
    .addEventListener('click', createWorkoutButton);

document
    .querySelector('#save-button')
    .addEventListener('click', saveWorkoutButton);

    document
    .querySelector('#cancel-button')
    .addEventListener('click', cancelButton);

document
    .querySelector('.card-footer')
    .addEventListener('click', deleteWorkoutButton);