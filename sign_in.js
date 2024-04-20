window.onload = function() {
    // Add event listener for the sign-in form submission
    var signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Validate username and password (you can add your own validation logic here)

        // For demonstration purposes, let's just log the entered username and password
        console.log('Username: ' + username);
        console.log('Password: ' + password);

        // You can add further logic here, such as sending the data to a server for authentication
        // or redirecting the user to another page upon successful sign-in
    });
};
