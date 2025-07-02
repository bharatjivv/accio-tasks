let count = document.getElementById('displayCount');
let dcrBtn = document.getElementById('decrement');
let incBtn = document.getElementById('increment');
let clrBtn = document.getElementById('clear');
let errorMsg = document.getElementById('errorMsg');
let counter = 1;
dcrBtn.disabled = false;

function displayingCount() {
    if(counter === 0) {
        clrBtn.style.display = 'none';
    }
    count.textContent = counter;
}
displayingCount();

dcrBtn.addEventListener('click', () => {
    if(counter > 0) {
        counter--;
        displayingCount();
    }
    else if(counter === 0) {
        errorMsg.innerText = `Error: Cannot go below 0`;
        dcrBtn.disabled = true;
        clrBtn.style.display = 'none';
    }
})

incBtn.addEventListener('click', () => {
    if(counter === 0) {
        errorMsg.innerText = ``;
        dcrBtn.disabled = false;
        clrBtn.style.display = 'none';
    }  

    clrBtn.style.display = 'inline';
    counter++;
    displayingCount();
})

clrBtn.addEventListener('click', () => {
    if(counter === 0){
        clrBtn.style.display = 'none';
    }
    counter = 0;
    displayingCount();
})