document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded and DOM is ready!');
});

    
const demoElement = document.getElementById('demo-box');
const changeElement = document.getElementById('changeContent');
const checkElement = document.getElementById('checkElement');

console.log(demoElement);
console.log(changeElement);
console.log(checkElement);  

changeElement.addEventListener('click', () => {
    // Manipulating the contents of the div
    demoElement.innerHTML = `<h1> New Content! </h1>`;
    demoElement.style.backgroundColor = "salmon";
    demoElement.style.color = "white";
    demoElement.style.borderRadius = "20px";
})

checkElement.addEventListener('dblclick', () => {
    console.log("Element object:", demoElement);
    console.log("Tag name:", demoElement.tagName);
    console.log("Current text:", demoElement.textContent);
    console.log("All styles:", demoElement.style);
    console.log("Class attribute:", demoElement.className);
})


// function changeContent() {
//     // Manipulate the element
//     demoElement.innerHTML = "<h1> New Content! </h1>";
//     demoElement.style.backgroundColor = "salmon";
//     demoElement.style.color = "white";
//     demoElement.style.borderRadius = "20px";
// }
        
// function checkElement() {
//     // See what the returned object contains
//     console.log("Element object:", demoElement);
//     console.log("Tag name:", demoElement.tagName);
//     console.log("Current text:", demoElement.textContent);
//     console.log("All styles:", demoElement.style);
//     console.log("Class attribute:", demoElement.className);
// }