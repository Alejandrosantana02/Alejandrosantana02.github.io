
// Get modal elements
const modal = document.getElementById("phoneModal");
const emergencyBtn = document.getElementById("emergencyBtn");
const closeModalBtn = document.querySelector(".close-btn");

// Open the modal when the "Emergency Services" button is clicked
emergencyBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal when the "X" button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
/*document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    if (name.value.trim() === '') {
        alert('Please enter your name.');
        name.focus();
        return;
    }

    if (phone.value.trim() === '') {
        alert('Please enter your phone number.');
        phone.focus();
        return;
    }

    if (message.value.trim() === '') {
        alert('Please enter a message.');
        message.focus();
        return;
    }

    alert('Thank you for your message! We will get back to you soon.');
    // Optionally, reset the form after submission
    this.reset();
});*/