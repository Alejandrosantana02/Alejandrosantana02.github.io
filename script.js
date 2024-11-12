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