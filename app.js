function submitRegisterForm(){
    var totalPlayers=document.getElementById('totalPlayers').value
    var groundPlayers=document.getElementById('groundSize').value
    var estimatedGameTime=document.getElementById('estimatedGameTime').value
    var gameFees=document.getElementById('gameFees').value

    if(totalPlayers=='' || groundPlayers=='' || estimatedGameTime=='' || gameFees=='' || estimatedGameTime<=0 || totalPlayers<=0 || groundPlayers<=0 || gameFees<=0){
        document.getElementById('err').innerText='Please input all data correctly.';
    }else if(groundPlayers > totalPlayers){
        document.getElementById('err').innerText='Total players should be more then ground size.';
    }else{
        document.getElementById('err').innerText='';
        localStorage.setItem('totalPlayers',totalPlayers);
        localStorage.setItem('groundPlayers',groundPlayers);
        localStorage.setItem('estimatedGameTime',estimatedGameTime);
        localStorage.setItem('gameFees',gameFees);
        document.getElementById('registerForm').style.display='none';
    }
}