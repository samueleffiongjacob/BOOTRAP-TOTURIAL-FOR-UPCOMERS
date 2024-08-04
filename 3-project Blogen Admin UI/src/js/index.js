// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('postForm');
//     const editor = CKEDITOR.replace('editor1', {
//         versionCheck: false,
//         extraPlugins: 'elementspath',
//         removePlugins: 'resize'
//     });

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         event.stopPropagation();

//         const isValid = form.checkValidity();
//         form.classList[isValid ? 'remove' : 'add']('was-validated');

//         // Reset form and CKEditor if valid
//         isValid ? (editor.setData(''), form.reset()) : null;

//         // Immediately reset validation states
//         Array.from(form.elements).forEach((element) => {
//             element.classList.remove('is-valid');
//             element.classList.remove('is-invalid');
//         });
//     });

//     // Add event listeners for dynamic validation
//     document.getElementById('title').addEventListener('input', function() {
//         this.value
//             ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
//             : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
//     });

//     document.getElementById('category').addEventListener('change', function() {
//         this.value
//             ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
//             : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
//     });

//     document.getElementById('formFile').addEventListener('change', function() {
//         const file = this.files[0];
//         (file && file.size <= 3 * 1024 * 1024)
//             ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
//             : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
//     });

//     // Real-time validation for CKEditor content
//     editor.on('change', () => {
//         const editorData = editor.getData();
//         const editorWordCount = editorData.trim().split(/\s+/).length;
//         const textarea = document.querySelector('#editor1');
//         const isValid = editorData && editorWordCount >= 2;

//         textarea.classList[isValid ? 'remove' : 'add']('is-invalid');
//         textarea.classList[isValid ? 'add' : 'remove']('is-valid');
//         // textarea.parentNode.querySelector('.invalid-feedback').style.display = isValid ? 'none' : 'block';
//         // textarea.parentNode.querySelector('.valid-feedback').style.display = isValid ? 'block' : 'none';
//     });
// });

// function validateForm() {
//     const form = document.getElementById('postForm');
//     const editor = CKEDITOR.instances.editor1;

//     form.checkValidity()
//         ? (editor.setData(''), form.reset(), form.classList.remove('was-validated'))
//         : form.classList.add('was-validated');

//     // Reset the validation states immediately
//     Array.from(form.elements).forEach((element) => {
//         element.classList.remove('is-valid');
//         element.classList.remove('is-invalid');
//         // const feedback = element.parentNode.querySelector('.invalid-feedback');
//         // feedback
//         //     ? (feedback.style.display = 'none')
//         //     : null;
//         // const validFeedback = element.parentNode.querySelector('.valid-feedback');
//         // validFeedback
//         //     ? (validFeedback.style.display = 'none')
//         //     : null;
//     });
// }


// working but not submitting
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('postForm');
//     const editor = CKEDITOR.replace('editor1', {
//         versionCheck: false,
//         extraPlugins: 'elementspath',
//         removePlugins: 'resize'
//     });

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         event.stopPropagation();

//         const isValid = form.checkValidity();
//         form.classList[isValid ? 'remove' : 'add']('was-validated');

//         isValid ? ( 
//             // Collect form data
//             (() => {
//                 const title = document.getElementById('title').value;
//                 const category = document.getElementById('category').value;
//                 const datePosted = new Date().toLocaleDateString(); // Current date
//                 const editorData = editor.getData();

//                 // Create a new table row
//                 const newRow = document.createElement('tr');
//                 newRow.innerHTML = `
//                     <td scope="row">New</td>
//                     <td>${title}</td>
//                     <td>${category}</td>
//                     <td>${datePosted}</td>
//                     <td><a href="details.html" class="btn btn-secondary">
//                         <i class="fa fa-angle-double-right"></i> Details
//                     </a></td>
//                 `;

//                 // Append the new row to the table body
//                 document.getElementById('postTableBody').appendChild(newRow);

//                 // Update the post count
//                 const postCount = document.getElementById('postCount');
//                 postCount.textContent = parseInt(postCount.textContent) + 1;

//                 // Reset the form and CKEditor
//                 editor.setData('');
//                 form.reset();

//                 // Reset validation states
//                 Array.from(form.elements).forEach((element) => {
//                     element.classList.remove('is-valid');
//                     element.classList.remove('is-invalid');
//                 });

//                 // Hide the modal
//                 $('#postModal').modal('hide');
//             })()
//         ) : null;
//     });

//     // Add event listeners for dynamic validation
//     document.getElementById('title').addEventListener('input', function() {
//         this.value
//             ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
//             : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
//     });

//     document.getElementById('category').addEventListener('change', function() {
//         this.value
//             ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
//             : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
//     });

//     document.getElementById('formFile').addEventListener('change', function() {
//         const file = this.files[0];
//         file && file.size <= 3 * 1024 * 1024
//             ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
//             : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
//     });

//     // Real-time validation for CKEditor content
//     editor.on('change', () => {
//         const editorData = editor.getData();
//         const editorWordCount = editorData.trim().split(/\s+/).length;
//         const textarea = document.querySelector('#editor1');
//         const isValid = editorData && editorWordCount >= 2;

//         textarea.classList[isValid ? 'remove' : 'add']('is-invalid');
//         textarea.classList[isValid ? 'add' : 'remove']('is-valid');
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('postForm');
    const editor = CKEDITOR.replace('editor1', {
        versionCheck: false,
        extraPlugins: 'elementspath',
        removePlugins: 'resize'
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    // Add event listeners for dynamic validation
    document.getElementById('title').addEventListener('input', function() {
        this.value
            ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
            : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
    });

    document.getElementById('category').addEventListener('change', function() {
        this.value
            ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
            : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
    });

    document.getElementById('formFile').addEventListener('change', function() {
        const file = this.files[0];
        file && file.size <= 3 * 1024 * 1024
            ? (this.classList.remove('is-invalid'), this.classList.add('is-valid'))
            : (this.classList.add('is-invalid'), this.classList.remove('is-valid'));
    });

    // Real-time validation for CKEditor content
    editor.on('change', () => {
        const editorData = editor.getData();
        const editorWordCount = editorData.trim().split(/\s+/).length;
        const textarea = document.querySelector('#editor1');
        const isValid = editorData && editorWordCount >= 2;

        textarea.classList[isValid ? 'remove' : 'add']('is-invalid');
        textarea.classList[isValid ? 'add' : 'remove']('is-valid');
    });
});

function validateForm() {
    const form = document.getElementById('postForm');
    const editor = CKEDITOR.instances.editor1;

    // Check form validity
    const isValid = form.checkValidity();
    form.classList[isValid ? 'remove' : 'add']('was-validated');

    if (isValid) {
        // Collect form data
        const title = document.getElementById('title').value;
        const category = document.getElementById('category').value;
        const datePosted = new Date().toLocaleDateString(); // Current date
        const editorData = editor.getData();

        
        // Get the current number of rows in the table for dynamic name
        const tableBody = document.getElementById('postTableBody');
        const rowCount = tableBody.rows.length + 1; // Adding 1 for the new row

        // Create a new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td scope="row">${rowCount}</td>
            <td>${title}</td>
            <td>${category}</td>
            <td>${datePosted}</td>
            <td><a href="details.html" class="btn btn-secondary">
                <i class="fa fa-angle-double-right"></i> Details
            </a></td>
        `;

        // Append the new row to the table body
        document.getElementById('postTableBody').appendChild(newRow);

        // Update the post count
        const postCount = document.getElementById('postCount');
        postCount.textContent = parseInt(postCount.textContent) + 1;

        // Reset the form and CKEditor
        editor.setData('');
        form.reset();

        // Reset validation states
        // Array.from(form.elements).forEach((element) => {
        //     element.classList.remove('is-valid');
        //     element.classList.remove('is-invalid');
        // });

        Array.from(form.elements).forEach((element) => {
            element.classList.remove('is-valid');
            element.classList.remove('is-invalid');

            // const feedback = element.parentNode.querySelector('.invalid-feedback');
            // if (feedback) feedback.style.display = 'none';

            // const validFeedback = element.parentNode.querySelector('.valid-feedback');
            // if (validFeedback) validFeedback.style.display = 'none';
        });


        // Hide the modal
        $('#postModal').modal('hide');
    } else {
        // Trigger validation feedback
        form.reportValidity();
    }
}


// JavaScript to set dynamic year 

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
