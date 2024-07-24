document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Optionally, you can add code here to handle form submission
            alert('Form submitted successfully!');

               // Reset the form fields
               form.reset();
               
            // Close the modal manually if form is valid
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();
        }
        form.classList.add('was-validated');
    });
});




