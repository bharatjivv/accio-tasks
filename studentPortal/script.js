let studData = [];

console.log('hi')
fetch('students.json')
.then((response) => response.json())
.then((data) => {
    studData = data;
    renderTable(studData);
})
.catch((e) => {
    console.log('error loading students data! ', e)
})


function renderTable(studData) {
    let studentData = document.getElementById('studentData');
    studentData.innerHTML = '';
    studData.forEach((student) => {
        studentData.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td class="tableFirstColumn"><img src=${student.img_src} class="profilePic" >${student.first_name +" " + student.last_name}</td>
            <td>${student.gender}</td>
            <td>${student.class}</td>
            <td>${student.marks}</td>
            <td>${student.passing ? "Passed" : "Failed"} </td>
            <td> ${student.email}</td>
        </tr>
        `
    })
    
}

let sortasc = document.getElementById('sortasc');
sortasc.addEventListener('click', () => {
    const sorted = [...studData].sort((a, b) => {
        const nameA = a.first_name.toLowerCase();
        const nameB = b.first_name.toLowerCase();
        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;
    })
    renderTable(sorted);
})

let sortdesc = document.getElementById('sortdesc');
sortdesc.addEventListener('click', () => {
    const sorted = [...studData].sort((a, b) => {
        const nameA = a.first_name.toLowerCase();
        const nameB = b.first_name.toLowerCase();
        if(nameA < nameB) return 1;
        if(nameA > nameB) return -1;
    })
    renderTable(sorted);
})

function sortByMarks(data) {
    const newData = data.sort((a, b) => {
        const marksA = a.marks;
        const marksB = b.marks;
        if(marksA < marksB) return -1;
        if(marksA > marksB) return 1;
    });
    renderTable(newData);
}

function sortByPass(studData) {
    const passData = studData.filter((student) => student.passing === true)
    // console.log(passData);
    renderTable(passData);
}


function sortByClass(studData) {
    const classData = studData.sort((a, b) => {
        classA = a.class;
        classB = b.class;
        if(classA < classB) return -1;
        if(classA > classB) return 1;
    })
    renderTable(classData);
}

function sortByGender(studData) {
    const maleStuds = studData.filter(students => students.gender.toLowerCase() === 'male')
    const otherStuds = studData.filter(students => students.gender.toLowerCase() !== 'male')
    renderTable(maleStuds.concat(otherStuds));

}


document.getElementById('search').addEventListener('input', () => handleSearch(studData));

function handleSearch(studData) {
    let inputText = document.getElementById('search').value.toLowerCase();
    // console.log(inputText);
    const filteredUsers = studData.filter(user => 
        user.first_name.toLowerCase().includes(inputText) ||
        user.last_name.toLowerCase().includes(inputText) || 
        user.email.toLowerCase().includes(inputText)
    )
    renderTable(filteredUsers);
    // document.getElementById('search').value = '';
}