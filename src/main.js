document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Get user input
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Client-side validation (you can add more validation as needed)
        if (!username || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate a successful registration
        // Replace this with your actual registration logic or an API call
        // In this example, we redirect to a success page after 2 seconds
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000); // 2 seconds
    });
});
