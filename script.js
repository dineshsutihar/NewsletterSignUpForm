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
    document.querySelector('.btn').addEventListener('click', function(event) {
        // event.preventDefault();
        document.getElementById('screen1').style.display = 'none';
        document.getElementById('screen2').style.display = 'flex';
    });
}