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

    // Show toast notification
    function showToast(registrationForm) {
    var toastEl = document.getElementById(registrationForm);
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
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

            // Optionally display a message to the user old 

            // if (!requiredFieldsValid) {
            //     alert('Please fill in all required fields.');
            // } else if (!passwordsValid) {
            //     alert('Passwords do not match.');
            // }

            // new one Show error toast
            showToast('errorToast');

            //Optionally display a message to the user

            if (!requiredFieldsValid) {
                console.log('Please fill in all required fields.');
            } else if (!passwordsValid) {
                console.log('Passwords do not match.');
            } 

        } else {
            // Form is valid; you can add form submission logic here
            // alert('Form submitted successfully!');
            // Form is valid; show success toast
            showToast('successToast');

          
            // Reset the form after submission
            $form[0].reset(); // Use native DOM reset method

            // Remove validation classes and feedback messages
            $form.find('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
            $form.find('.valid-feedback, .invalid-feedback').hide();
        }
    });
});

// toast and model show at the same time
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm');
    const successToastElement = document.getElementById('successToastsForContact');
    const successToast = new bootstrap.Toast(successToastElement, { delay: 5000 }); // Set delay to 5000ms (5 seconds)

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity()) {
            successToast.show();
            
            // Delay hiding the modal to ensure the toast is shown
            setTimeout(() => {
                const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
                modal.hide();
            }, 5000); // Delay the modal hide for 5 seconds (same as toast delay)
            

            
            form.reset();
            form.classList.remove('was-validated');
        } else {
            form.classList.add('was-validated');
        }
    });
});


