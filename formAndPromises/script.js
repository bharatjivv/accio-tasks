const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());

    if (name === '' || isNaN(age)) {
        alert('Please enter valid details');
        return;
    }

    const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    checkAge
    .then(message => alert(message))
    .catch(error => alert(error));
});


