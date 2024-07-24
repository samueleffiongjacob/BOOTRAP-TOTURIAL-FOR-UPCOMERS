$(document).ready(function() {
    const $form = $("#registrationForm");
    const $password = $("#password");
    const $confirmPassword = $("#confirmPassword");
    const $username = $("#username"); // Assuming there's a username field
    const $email = $("#email"); // Assuming there's an email field

    // Function to validate passwords
    function validatePasswords() {
        if ($password.val() === $confirmPassword.val() && $password.val() !== "") {
            $confirmPassword.removeClass('is-invalid').addClass('is-valid');
            $password.removeClass('is-invalid').addClass('is-valid');
        } else {
            $confirmPassword.removeClass('is-valid').addClass('is-invalid');
            $password.removeClass('is-valid').addClass('is-invalid');
        }
    }

    // Validate passwords on keyup
    $password.on("keyup", validatePasswords);
    $confirmPassword.on("keyup", validatePasswords);

    // Validate required fields
    function validateRequiredFields() {
        let isValid = true;

        // Check if username and email are not empty
        if (!$username.val().trim()) {
            $username.addClass('is-invalid');
            isValid = false;
        } else {
            $username.removeClass('is-invalid').addClass('is-valid');
        }

        if (!$email.val().trim()) {
            $email.addClass('is-invalid');
            isValid = false;
        } else {
            $email.removeClass('is-invalid').addClass('is-valid');
        }

        return isValid;
    }

    // Handle form submission
    $form.on("submit", function(event) {
        // Perform required field validation
        const requiredFieldsValid = validateRequiredFields();

        // Perform password validation
        const passwordsValid = $password.val() === $confirmPassword.val() && $password.val() !== "";

        if (!requiredFieldsValid || !passwordsValid) {
            event.preventDefault(); // Prevent form submission

            // Trigger validation feedback
            validatePasswords();

            // Optionally display a message to the user
            if (!requiredFieldsValid) {
                alert('Please fill in all required fields.');
            } else if (!passwordsValid) {
                alert('Passwords do not match.');
            }
        } else {
            // Form is valid; you can add form submission logic here
            alert('Form submitted successfully!');

            // Reset the form after submission
            $form[0].reset(); // Use native DOM reset method

            // Remove validation classes and feedback messages
            $form.find('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
            $form.find('.valid-feedback, .invalid-feedback').hide();
        }
    });
});


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


// document.addEventListener('DOMContentLoaded', (event) => {
//     const form = document.getElementById('contactForm');
//     const submitBtn = document.getElementById('submitBtn');

//     submitBtn.addEventListener('click', function(event) {
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         } else {
//             // Optionally, you can add code here to handle form submission
//             alert('Form submitted successfully!');

//                // Reset the form fields
//                form.reset();
               
//             // Close the modal manually if form is valid
//             const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
//             modal.hide();
//         }
//         form.classList.add('was-validated');
//     });
// });



