console.log("Welcome to the console, stranger!");

var op_names = ["Rain", "Mourra", "Azab", "Kymo", "Ayoub", "Sue", "Oreo", "Za3tar", "Ziad_Moraba3", "Eren_Yeager"]

function typename() {
    var name = prompt("Enter your name: ", "Gon_Freecss");
    var playerName = document.getElementById("playerName");
    (name == null) ? playerName.innerHTML += "Sakura <br>": playerName.innerHTML += name + "<br>";

    var oppoName = document.getElementById("oppoName");
    var opn = Math.random() * 9;
    oppoName.innerHTML += op_names[Math.round(opn)];
}

var choices = ["pics/rock.png", "pics/paper.png", "pics/scissors.png"]
var values = ["rock", "paper", "scissors"]

function rock() {
    var player = document.getElementById("plc");
    player.src = choices[0];
    player.value = values[0];
}

function paper() {
    var player = document.getElementById("plc");
    player.src = choices[1];
    player.value = values[1];
}

function scissors() {
    var player = document.getElementById("plc");
    player.src = choices[2];
    player.value = values[2];
}

function play() {
    var player = document.getElementById("plc");
    var computer = document.getElementById("clc");

    var com = Math.random() * 2;
    computer.src = choices[Math.round(com)];
    computer.value = values[Math.round(com)];

    var score = document.getElementById("score");

    if (player.value == "scissors" && computer.value == "rock") {
        score.innerHTML = "YOU LOST!!! :(";
    } else if (player.value == "paper" && computer.value == "scissors") {
        score.innerHTML = "YOU LOST!!! :(";
    } else if (player.value == "rock" && computer.value == "paper") {
        score.innerHTML = "YOU LOST!!! :(";
    } else if (player.value == computer.value) {
        score.innerHTML = "A DRAW!!! XD";
    } else {
        score.innerHTML = "YOU WON!!! :)";
    }
}