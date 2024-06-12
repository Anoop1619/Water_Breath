// Get all the "Apply Now" buttons
const applyButtons = document.querySelectorAll('.apply-btn');

// Add a click event listener to each button
applyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for applying! We will contact you soon.');
    });
});
