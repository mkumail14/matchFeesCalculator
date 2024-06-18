function submitRegisterForm() {
    // Get values from the input fields
    var totalPlayers = document.getElementById('totalPlayers').value;
    var groundPlayers = document.getElementById('groundSize').value;
    var estimatedGameTime = document.getElementById('estimatedGameTime').value;
    var gameFees = document.getElementById('gameFees').value;

    // Initialize error message element
    var errorElement = document.getElementById('err');

    // Validate input values
    if (totalPlayers === '' || groundPlayers === '' || estimatedGameTime === '' || gameFees === '' || 
        estimatedGameTime <= 0 || totalPlayers <= 0 || groundPlayers <= 0 || gameFees <= 0) {
        errorElement.innerText = 'Please input all data correctly.';
    } else if (parseInt(groundPlayers) > parseInt(totalPlayers)) {
        errorElement.innerText = 'Total players should be more than ground size.';
    } else {
        // Clear error message
        errorElement.innerText = '';

        // Store values in localStorage
        localStorage.setItem('totalPlayers', totalPlayers);
        localStorage.setItem('groundPlayers', groundPlayers);
        localStorage.setItem('estimatedGameTime', estimatedGameTime);
        localStorage.setItem('gameFees', gameFees);

        // Hide the registration form
        document.getElementById('registerForm').style.display = 'none';
    }
}
