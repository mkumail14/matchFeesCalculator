document.getElementById('registerGKForm').style.display='none';
document.getElementById('registerPlayersForm').style.display='none';

function submitRegisterForm() {
    var totalPlayers = document.getElementById('totalPlayers').value;
    var groundPlayers = document.getElementById('groundSize').value;
    var estimatedGameTime = document.getElementById('estimatedGameTime').value;
    var gameFees = document.getElementById('gameFees').value;
    var errorElement = document.getElementById('err');

    if (totalPlayers === '' || groundPlayers === '' || estimatedGameTime === '' || gameFees === '' || 
        estimatedGameTime <= 0 || totalPlayers <= 0 || groundPlayers <= 0 || gameFees <= 0) {
        errorElement.innerText = 'Please input all data correctly.';
    } else if (parseInt(groundPlayers) > parseInt(totalPlayers)) {
        errorElement.innerText = 'Total players should be more than ground size.';
    } else {
        errorElement.innerText = '';
        localStorage.setItem('totalPlayers', totalPlayers);
        localStorage.setItem('groundPlayers', groundPlayers);
        localStorage.setItem('estimatedGameTime', estimatedGameTime);
        localStorage.setItem('gameFees', gameFees);
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('registerGKForm').style.display='block';
    }
}

function getGkName() {
    if (!document.getElementById('gkName').value.trim() == '') {
        localStorage.setItem('GK', document.getElementById('gkName').value);
        document.getElementById('registerGKForm').style.display = 'none';
        registerPlayers();
    } else {
        document.getElementById('err1').innerText = "Please Enter GK's Name.";
    }
}

function registerPlayers() {
    document.getElementById('registerPlayersForm').style.display = 'block';
    var playerInputs = document.getElementById('playerInputs');
    playerInputs.innerHTML = '';

    var totalPlayers = localStorage.getItem('totalPlayers');
    for (var i = 1; i <= totalPlayers; i++) {
        var inputGroup = document.createElement('div');
        inputGroup.className = 'input2-group';
        
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'input2';
        input.placeholder = 'Enter Player Name ' + i;
        input.id = 'playerName' + i;
        
        inputGroup.appendChild(input);
        playerInputs.appendChild(inputGroup);
    }
}



function submitPlayers() {
    var totalPlayers = localStorage.getItem('totalPlayers');
    var players = [];

    for (var i = 1; i <= totalPlayers; i++) {
        var playerName = document.getElementById('playerName' + i).value.trim();
        if (playerName !== '') {
            players.push(playerName);
        } else {
            document.getElementById('err2').innerText = "Please Enter all Player Names.";
            return;
        }
    }

    localStorage.setItem('playersNames', JSON.stringify(players));
    document.getElementById('err2').innerText = '';
    document.getElementById('registerPlayersForm').style.display='none';
    alert('Players registered successfully!');

}

function dateCal() {
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var zone = "am";
    var todayDate = new Date();
    var hour = todayDate.getHours();
    if (hour > 12) {
        zone = "pm";
        hour -= 12;
    }
    var datetime = ` ${todayDate.getDate()}/${month[todayDate.getMonth()]}/${todayDate.getFullYear()}---(${hour} : ${todayDate.getMinutes()} : ${todayDate.getSeconds()})`;
    return datetime;
}

setInterval(function () {
    document.getElementById('dateNow').innerText = dateCal();
}, 1000);