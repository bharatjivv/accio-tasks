document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('infi-list');
    let itemCount = 1;
    
    // Add initial 10 list items
    for (let i = 0; i < 10; i++) {
        addListItem();
    }
    
    
    list.addEventListener('scroll', function() {
        // Check if user has scrolled to the bottom
        console.log(list.scrollTop, list.clientHeight, list.scrollHeight);
        if (list.scrollTop + list.clientHeight >= list.scrollHeight - 10) {
            // Add 2 more items
            addListItem();
            addListItem();
        }
    });
    
    function addListItem() {
        const li = document.createElement('li');
        li.textContent = `Item ${itemCount++}`;
        list.appendChild(li);
    }
});

