console.log("Async Await");

// function getData() {
//     fetch("https://catfact.ninja/fact")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });
// }

async function getData() {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    console.log(data);
    document.body.innerHTML += 
    `
    <div>
        <p>Fact - ${data.fact} </p>
        <p>Length - ${data.length} </p>
    </div>
    `
}

getData();