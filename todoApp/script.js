let todo = ['todo1', 'todo2', 'todo3'];
let progress = ['progress1', 'progress2', 'progress3'];
let done = ['done1', 'done2', 'done3'];

let todocol = document.getElementById('todo');
let progresscol = document.getElementById('progress');
let donecol = document.getElementById('done');

function renderTodo() {
    todocol.innerHTML = `<h1>Todo </h1>`
    todo.forEach((val, index) => {
        todocol.innerHTML += 
        `
        <div class='task todo'>
            <p> ${val} </p>
            <button onclick="handleClick('todo', ${index})"> &rarr; </button>
            
        </div>
        `
    })
}

function renderProgress() {
    progresscol.innerHTML = `<h1> Progress </h1>`
    progress.forEach((val, index) => {
        progresscol.innerHTML += 
        `
        <div class='task progress'>
            <p> ${val} </p>
            <button onclick="handleLeftClick('progress', ${index})"> &larr; </button>
            <button onclick="handleClick('progress', ${index})"> &rarr; </button>
        </div>
        `
    })
}

function renderDone() {
    donecol.innerHTML = '<h1> Done <h1>'
    done.forEach((val, index) => {
        donecol.innerHTML += 
        `
        <div class='task done'>
            <p> ${val} </p>
            <button onclick="handleLeftClick('done', ${index})"> &larr; </button>
        </div>
        `
    })
}

renderTodo()
renderProgress()
renderDone()


function handleClick(colname, index) {
    if(colname === "todo") {
        let itemtobePushed = todo[index]
        todo = todo.filter((item, i) => i !==index);
        console.log('Array after removal of item', todo, itemtobePushed);
        renderTodo();
        progress.push(itemtobePushed);
        renderProgress();
    }
    else if(colname === "progress") {
        let itemtobePushed = progress[index];
        progress = progress.filter((item, i) => i !== index);
        console.log("Array after removal of item", progress, itemtobePushed, typeof itemtobePushed);
        renderProgress();
        done.push(itemtobePushed);
        renderDone();
    }
   
}

function handleLeftClick(colname, index) {
    if(colname === "progress"){
        // progress se todo me bhejo array ke item ko
        let itemtobePushed = progress[index];
        progress = progress.filter((item, i) => i !== index);
        console.log('After removing element from progress arr', progress, itemtobePushed);
        renderProgress();
        todo.push(itemtobePushed);
        renderTodo();
    }
    else if(colname === 'done') {
        // done se progress me bhejo array ke item ko
        let itemtobePushed = done[index];
        done = done.filter((item, i) => i !== index);
        console.log('AFter removing element from done arr', done, itemtobePushed)
        renderDone();
        progress.push(itemtobePushed);
        renderProgress();
    }
}