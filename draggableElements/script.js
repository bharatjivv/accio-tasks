document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const cubeCount = 25; // Can be adjusted to any number
    const cubeSize = 80;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Create a grid of cubes
    for (let i = 0; i < cubeCount; i++) {
    const cube = document.createElement('div');
    cube.className = 'cube';
    cube.textContent = (i + 1).toString().padStart(2, '0');
    
    // Position cubes in a grid
    const cols = Math.floor(containerWidth / (cubeSize + 20));
    const row = Math.floor(i / cols);
    const col = i % cols;
    
    cube.style.left = `${20 + col * (cubeSize + 20)}px`;
    cube.style.top = `${20 + row * (cubeSize + 20)}px`;
    
    container.appendChild(cube);
    
    // Add drag functionality
    makeDraggable(cube);
    }
    
    function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;
    
    element.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    
    function startDrag(e) {
        isDragging = true;
        element.classList.add('dragging');
        
        // Calculate offset between mouse position and cube position
        const rect = element.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        e.preventDefault(); // Prevent text selection
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        // Calculate new position with boundary constraints
        let newX = e.clientX - offsetX - container.getBoundingClientRect().left;
        let newY = e.clientY - offsetY - container.getBoundingClientRect().top;
        
        // Apply boundaries
        newX = Math.max(0, Math.min(newX, container.clientWidth - cubeSize));
        newY = Math.max(0, Math.min(newY, container.clientHeight - cubeSize));
        
        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    }
    
    function endDrag() {
        isDragging = false;
        element.classList.remove('dragging');
    }
    }
});