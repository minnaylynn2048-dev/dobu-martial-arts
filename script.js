/* DoBu Martial Arts - Main JavaScript File */

document.addEventListener('DOMContentLoaded', function() {
    console.log('DoBu Martial Arts Website Initialized');

    // 1. Mobile Navigation Toggle (Hamburger Menu)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            navToggle.classList.toggle('active');
        });
    }

    // 2. Form Validation for Forum & Enquiry Page (forumn.html)
    const enquiryForm = document.querySelector('#enquiry-form, form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(event) {
            let isValid = true;
            const nameInput = document.querySelector('input[name="name"], #name');
            const emailInput = document.querySelector('input[name="email"], #email');
            const messageInput = document.querySelector('textarea[name="message"], #message');

            // Email Regex Pattern
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Clear previous errors
            document.querySelectorAll('.error-msg').forEach(el => el.remove());

            function showError(inputElement, message) {
                isValid = false;
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-msg';
                errorDiv.style.color = '#e74c3c';
                errorDiv.style.fontSize = '0.85rem';
                errorDiv.style.marginTop = '4px';
                errorDiv.innerText = message;
                inputElement.parentNode.appendChild(errorDiv);
            }

            if (nameInput && nameInput.value.trim() === '') {
                showError(nameInput, 'Please enter your full name.');
            }

            if (emailInput) {
                if (emailInput.value.trim() === '') {
                    showError(emailInput, 'Please enter your email address.');
                } else if (!emailPattern.test(emailInput.value.trim())) {
                    showError(emailInput, 'Please enter a valid email address.');
                }
            }

            if (messageInput && messageInput.value.trim() === '') {
                showError(messageInput, 'Please enter your message or enquiry.');
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                alert('Thank you! Your enquiry has been submitted successfully to DoBu Martial Arts.');
            }
        });
    }

    // 3. Active Link Highlighting
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});
