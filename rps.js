var op_names = ["Rain", "Mourra", "Azab", "Kymo", "Ayoub", "Sue", "Oreo", "Za3tar", "Ziad_Moraba3", "Eren_Yeager"];

function typename() {
    var name = prompt("Enter your name: ", "Gon_Freecss");
    var playerName = document.getElementById("playerName");
    if (name === null) {
        playerName.innerHTML += "Sakura <br>";
    } else {
        playerName.innerHTML += name + "<br>";
    }

    var oppoName = document.getElementById("oppoName");
    var opn = Math.random() * 9;
    oppoName.innerHTML += op_names[Math.round(opn)];
}

var choices = ["rock", "paper", "scissors"];

function rock() {
    var player = document.getElementById("plc");
    player.src = "pics/rock.png";
    player.value = "rock";
}

function paper() {
    var player = document.getElementById("plc");
    player.src = "pics/paper.png";
    player.value = "paper";
}

function scissors() {
    var player = document.getElementById("plc");
    player.src = "pics/scissors.png";
    player.value = "scissors";
}

function play() {
    var player = document.getElementById("plc");
    var computer = document.getElementById("clc");

    var com = Math.random() * 2;
    computer.src = "pics/" + choices[Math.round(com)] + ".png";
    computer.value = choices[Math.round(com)];

    var score = document.getElementById("score");
    // var scoreboard = document.getElementById("scoreboard");

    if (player.value == "scissors" && computer.value == "rock") {
        score.innerHTML = "YOU LOST :(";
        document.getElementById("scoreboard").style.background = "red";
    } else if (player.value == "paper" && computer.value == "scissors") {
        score.innerHTML = "YOU LOST :(";
        document.getElementById("scoreboard").style.background = "red";
    } else if (player.value == "rock" && computer.value == "paper") {
        score.innerHTML = "YOU LOST :(";
        document.getElementById("scoreboard").style.background = "red";
    } else if (player.value == computer.value) {
        score.innerHTML = "A TIE! XD";
    } else {
        score.innerHTML = "YOU WON :)";
        document.getElementById("scoreboard").style.background = "green";
    }
}