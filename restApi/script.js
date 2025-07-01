fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => console.log(data));

fetch('https://dummyjson.com/products/2')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    .then((data) => {
        document.body.innerHTML += 
        `
        <div> 
            <p>Title - ${data.title} </p>
            <p>Description - ${data.description} </p>
            <p>Category - ${data.category} </p>
            <p>Price - ${data.price}</p>

        </div>
        `
    })


    

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify ({
        id: 12,
        title: "Top G stickers",
        description: "Are you trying your best",
        category: "stickers",
        price: 249.99,
        discountPercentage: 14.4,
        rating: 5.00,
        stock: 10,
    
    })
})
.then(res => res.json())
.then(console.log);