let submitbtn = document.getElementById('btn')
let output = document.getElementById('output')

submitbtn.addEventListener('click', async () => {

    let displayText = document.getElementById('text').value.trim();
    let delay = Number(document.getElementById('delay').value.trim()) 

    if(displayText == "" || delay == "") {
        alert('enter both values')
        return ;
    }

    document.getElementById('text').value = '';
    document.getElementById('delay').value = ''; 

    output.innerText = 'waiting...'

    await callingfunc(delay*1000);
    output.innerText = displayText;

})

function callingfunc(ms) {
    return new Promise (function (resolve) {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}