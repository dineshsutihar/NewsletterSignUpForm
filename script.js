window.onload = function() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const screen1 = document.querySelector('.screen1');
    const screen2 = document.querySelector('.screen2');

    emailInput.oninvalid = function(event) {
        event.preventDefault();
        emailError.textContent = 'Valid email required';
    }

    emailInput.oninput = function() {
        emailError.textContent = '';
    }
}