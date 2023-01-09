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

// const deleteWorkoutButton = async (event) => {
//     event.preventDefault();
//     document.
//     try { 
//         fetch(`/api/workouts/${workoutID}`, {

//         }) 
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

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