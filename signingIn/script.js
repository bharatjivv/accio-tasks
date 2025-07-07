
function EmailVerification () {
    let input = document.getElementById('emailInput').value;
    let emailError = document.getElementById('emailError');

    if(input.length < 2) {
        emailError.innerText = `Length too short!`
    } else if((!input.includes('@'))) {
        emailError.innerText = `Email doesnot includes @. Please enter valid email.`

    } else if(!(input.includes('.')) ) {
        emailError.innerText = `Email doesnot includes '.' Please enter valide email.`

    } else if(input.includes(' ')) {
        emailError.innerText = `Email includes blank spaces. Please enter valid email.`

    } else {
        emailError.innerText = ''
        return true;
    }
    
}

function PasswordVerification () {
    let passwordInput = document.getElementById('passwordInput').value;
    let passwordError = document.getElementById('passwordError')

    if(passwordInput.length < 7) {
        passwordError.innerText = 'Password too short!'
    } else {
        passwordError.innerText = '';
        return true;
    }
}

function finalSubmission() {
    let email = EmailVerification();
    let password = PasswordVerification();
    let greensignal = document.getElementById('greensignal')

    if(email && password) {
        greensignal.textContent = 'All good to go'
        greensignal.style.display = 'block';
        return true;
    } else {
        greensignal.style.display = 'none';

    }
}

function submitclick(){
    
    if(finalSubmission()) {
        let confirm = window.confirm('Are you sure you want to submit?');
        if(confirm === true){
            alert("Successful signup!");
        }
        else{
            location.reload();
        }
    }
    
}
