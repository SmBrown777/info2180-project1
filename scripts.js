/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {

    const newsletterForm = document.querySelector('.newsletter form');

    const emailInput = document.querySelector('#email');

    const messageArea = document.querySelector('.message');

    newsletterForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const email = emailInput.value.trim();

        
        if (email === ''){
            messageArea.textContent = 'Please enter a valid email address.'
        }else{
            messageArea.textContent = 'Thank you! Your email address '+ email +' has been added to our mailing list!';
        }

    });

});
