window.onload = function() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const dismissBtn = document.querySelector('.dismiss-btn');

    emailInput.oninvalid = function(event) {
        event.preventDefault();
        emailError.textContent = 'Valid email required';
    }

    emailInput.oninput = function() {
        emailError.textContent = '';
    }
    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.screen1').style.display = 'none';
        document.querySelector('.screen2').style.display = 'flex';
    });
    dismissBtn.addEventListener('click', function () {
        // Dismiss button logic, for example, hide the success message
        document.querySelector('.screen1').style.display = 'flex';
        document.querySelector('.screen2').style.display = 'none';
        // Optionally, you can reset the form or perform other actions here
        
      });
}