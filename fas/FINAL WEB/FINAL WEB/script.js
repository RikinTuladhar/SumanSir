// JavaScript for form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const selectedEvent = document.getElementById('event').value;

        if (name && email && selectedEvent) {
            alert(`Thank you for registering, ${name}! You have signed up for the ${selectedEvent}.`);
            form.reset(); // Reset form after submission
        } else {
            alert('Please fill out all fields.');
        }
    });
});

// JavaScript for the hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
