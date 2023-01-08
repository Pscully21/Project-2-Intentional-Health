const createWorkoutButton = (event) => {
    event.preventDefault();
    document.querySelector("#modal").classList.add("is-active");
};

const saveWorkoutButton = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-id').value.trim();
    const category = document.querySelector('#category').value.trim();
    const description = document.querySelector('#description-id').value.trim();

    if (title && category && description) {
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify({title, category, description}),
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

const cancelButton = (event) => {
    document.querySelector('#modal').classList.remove('is-active');
    console.log('removed')
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