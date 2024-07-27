// working but very basic
// document.getElementById('submit').addEventListener('click', function(event) {
//     // Prevent the form from submitting
//     event.preventDefault();

//     // Clear previous error messages
//     document.getElementById('nameError').innerText = '';
//     document.getElementById('emailError').innerText = '';
//     document.getElementById('successMessage').innerText = '';

//     // Get input values
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
    
//     // Validate inputs
//     let isValid = true;

//     if (name === '') {
//         document.getElementById('nameError').innerText = 'Name is required.';
//         isValid = false;
//     }

//     if (email === '') {
//         document.getElementById('emailError').innerText = 'Email is required.';
//         isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//         document.getElementById('emailError').innerText = 'Email is invalid.';
//         isValid = false;
//     }

//     // If valid, you can proceed with form submission
//     if (isValid) {
                
//         // Display a success message
//         const successMessage = document.getElementById('successMessage');
//         successMessage.innerText = 'You have successfully subscribed to our newsletter!';
//         successMessage.style.display = 'block';
               
//         // Remove the message after 10 seconds
          
//         setTimeout(() => {
//             successMessage.innerText = '';
//         }, 3000);

//         // Reset the form fields
//         document.getElementById('newsletter').reset();

//     }


// });


document.getElementById('submit').addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Validate inputs
    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = 'Email is invalid.';
        isValid = false;
    }

    // If valid, show toast and reset form
    if (isValid) {
        // Show the toast message
        var toastEl = document.getElementById('successToast');
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
        
        // Reset the form fields
        document.getElementById('newsletter').reset();
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactme');
    const successToastElement = document.getElementById('successToastForm');
    const successToast = new bootstrap.Toast(successToastElement, { delay: 5000 }); // Set delay to 5000ms (5 seconds)

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity()) {
            successToast.show();
            
            form.reset();
            form.classList.remove('was-validated');
        } else {
            form.classList.add('was-validated');
        }
    });
});
