let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(listItem);
    });
}

function checkout() {
    alert("Proceeding to checkout!");
}