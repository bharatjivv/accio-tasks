// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById('cart-list');

let cart = JSON.parse(sessionStorage.getItem('cart')) || [];


// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} 
    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });

  const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtn.forEach((button) => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'));
        addToCart(productId);
    })
  })

}

// Render cart list
// function renderCart() {

//   cartList.innerHTML = ""; 

//   if (cart.length === 0) {
//     cartList.innerHTML = "<li>Cart is empty</li>";
//     return;
//   }

//   cart.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${item.name} - $${item.price}
//     <button class="cart-button" onclick="removeFromCart(${item.id})">Remove from cart </button>
//     `;
//     cartList.appendChild(li);
//   });

// }

function renderCart() {
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "";
    return;
  }

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price} 
      <button class="remove-btn" data-index="${index}">Remove</button>`;
    cartList.appendChild(li);
  });

  // Attach event listeners to remove buttons
  document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-index'));
      removeFromCart(index);
    });
  });
}


// Add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if(product) {
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item at that index
  sessionStorage.setItem("cart", JSON.stringify(cart)); // Update sessionStorage
  renderCart(); // Re-render cart
}

// Clear cart
let clearCartBtn = document.getElementById('clear-cart-btn');
clearCartBtn.addEventListener("click", clearCart);
function clearCart() {
  cart = [];
  sessionStorage.removeItem("cart");
  renderCart();
}

// Initial render
renderProducts();
renderCart();
