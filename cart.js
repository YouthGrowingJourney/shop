const cartItemsContainer = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsContainer.innerHTML = "";

  cart.forEach(id => {
    const product = products.find(p => p.id === id);
    const div = document.createElement("div");

    div.innerHTML = `
      <p>${product.name} - $${product.price}</p>
    `;

    cartItemsContainer.appendChild(div);
  });
}

function checkout() {
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  location.reload();
}

renderCart();
