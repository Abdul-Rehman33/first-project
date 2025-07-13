document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();
            let error = '';
            if (!name) error += 'Name is required.\n';
            if (!email || !email.includes('@')) error += 'Valid email is required.\n';
            if (!message) error += 'Message is required.';
            if (error) {
                alert(error);
            } else {
                alert('Thank you for contacting us, ' + name + '!');
                form.reset();
            }
        });
    }
});
