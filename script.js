window.onload = function() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    emailInput.oninvalid = function(event) {
        event.preventDefault();
        emailError.textContent = 'Valid email required';
    }

    emailInput.oninput = function() {
        emailError.textContent = '';
    }
}