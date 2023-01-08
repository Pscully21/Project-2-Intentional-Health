const createGoalButton = (event) => {
    event.preventDefault();
    document.querySelector("#modal").classList.add("is-active");
};

const saveGoalButton = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-id').value.trim();
    const startDate = document.querySelector('#start-date-id').value.trim();
    const endDate = document.querySelector('#end-date-id').value.trim();
    const topic = document.querySelector('#topic').value.trim();
    const description = document.querySelector('#description-id').value.trim();

    if (title && startDate && endDate && topic && description) {
        const response = await fetch('/api/goals/post', {
            method: 'POST',
            body: JSON.stringify({title, startDate, endDate, topic, description}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            document.location.replace('/goals');
        } else {
            alert('Something went wrong!');
        }
    }

};

const cancelButton = (event) => {
    event.preventDefault();
    document.querySelector('#modal').classList.remove('is-active');
};

document
    .querySelector('#create-button')
    .addEventListener('click', createWorkoutButton);

document
    .querySelector('#save-button')
    .addEventListener('click', saveGoalButton);

document
    .querySelector('#cancel-button')
    .addEventListener('click', cancelButton);