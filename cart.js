window.onload = function() {
    // Dummy data for demonstration
    var cartItems = [
        { name: 'Product 1', price: 20, quantity: 2, image: 'product1.jpg' },
        { name: 'Product 2', price: 30, quantity: 1, image: 'product2.jpg' },
        { name: 'Product 3', price: 15, quantity: 3, image: 'product3.jpg' }
    ];

    var cartItemsContainer = document.getElementById('cartItems');

    // Populate cart items
    cartItems.forEach(function(item) {
        var cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        var imgElement = document.createElement('img');
        imgElement.src = item.image;

        var infoElement = document.createElement('div');
        infoElement.innerHTML = `<span>${ABC}</span> <span>${item.quantity} x $${item.price}</span>`;

        cartItemElement.appendChild(imgElement);
        cartItemElement.appendChild(infoElement);

        cartItemsContainer.appendChild(cartItemElement);
    });

    // Add event listener for checkout button
    var checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', function() {
        alert('Checkout functionality is not implemented yet!');
    });
};
