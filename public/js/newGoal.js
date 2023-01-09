const createGoalButton = (event) => {
    event.preventDefault();
    document.querySelector("#modal").classList.add("is-active");
};

const saveGoalButton = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-id').value.trim();
    const start_date = document.querySelector('#start-date-id').value.trim();
    const end_date = document.querySelector('#end-date-id').value.trim();
    const topic = document.querySelector('#topic').value.trim();
    const body = document.querySelector('#description-id').value.trim();

    if (title && start_date && end_date && topic && body) {
        const response = await fetch('/api/goals/', {
            method: 'POST',
            body: JSON.stringify({title, start_date, end_date, topic, body}),
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
    .addEventListener('click', createGoalButton);

document
    .querySelector('#save-goal')
    .addEventListener('click', saveGoalButton);

document
    .querySelector('#cancel-button')
    .addEventListener('click', cancelButton);