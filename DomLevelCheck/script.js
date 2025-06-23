//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('level');
    let level = 0;
    let currentElement = element;
    
    // console.group("Before the loop starts");
    // console.log("Level : ", level);
    // console.log("currentElement :", currentElement);
    // console.groupEnd()

    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement;
        // console.log('Current level :', level, 'currentElement: ', currentElement)
    }
    
    alert(`The level of the element is: ${level}`);
});