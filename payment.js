var stripe = Stripe('your_stripe_public_key');
var elements = stripe.elements();

var card = elements.create('card', {
    style: {
        base: {
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
        }
    }
});

card.mount('#cardNumber');

var form = document.getElementById('paymentForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    stripe.createToken(card).then(function(result) {
        if (result.error) {
            console.error(result.error.message);
        } else {
            console.log(result.token);
            // Send the token to your server to process the payment
            // You would typically use AJAX to send the token to your server
        }
    });
});
