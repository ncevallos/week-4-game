//initialize variables below
var wins = 0;
var losses = 0;
var playerScore = 0;
var goalScore = 0;
var crystalValues = [0, 0, 0, 0];
initializeCrystalValues();

//the function below initializes the values for the crystals as well as for the goal score and re-initializes the player's score to zero. This function is first called when the page is loaded, but can later be called when the player wins or loses.
function initializeCrystalValues(){
	goalScore  = [Math.floor(Math.random() * (120-19)) + 19];
	playerScore = 0;
	for(i=0; i<4; i++){
		crystalValues[i] = [Math.floor(Math.random() * (12-1)) + 1];

	}
}

//the code below tells the program what to do when the image of each crystal is clicked. the check score function is called after each click to see if the changes incurred with the clicked have caused the player to win or lose.

 $(document).ready(function() {
 $("#blueCrystal0").on("click", function() {
    playerScore = playerScore+parseInt(crystalValues[0]);
    checkScore();
 });
 $("#greenCrystal1").on("click", function() {
    playerScore = playerScore+parseInt(crystalValues[1]);
    checkScore();
 });
 $("#purpleCrystal2").on("click", function() {
    playerScore = playerScore+parseInt(crystalValues[2]);
    checkScore();
 });
 $("#redCrystal3").on("click", function() {
    playerScore = playerScore+parseInt(crystalValues[3]);
    checkScore();
 });
 });

 //function below checks the player's score against the goal score and determines if a player has win, lost, or is to keep playing.
function checkScore(){
	 	if(playerScore==goalScore){
		alert("You WIN!");
		wins++;
		initializeCrystalValues();
	}
	else if(playerScore > goalScore){
		alert("You went over the goal score. YOU LOSE!");
		losses++;
		initializeCrystalValues();
	}
	else{
	}
}


//the code below refreshes each time the mouse is clicked, and displays data like the player's current score, goal score, and updates their wins and losses.
document.onclick = function(event) {


        var html =
          "<p>Goal Score: " + goalScore + "</p>";

        // The html that displays the goal score.
        document.querySelector("#goalScore").innerHTML = html;

        var html2 =
          "<p>Wins: " + wins + "<br>" +
          "Losses: " + losses + "</p>";

        // The html that displays the losses, and wins.
        document.querySelector("#gameText").innerHTML = html2;

        var html3 =
          "<p>" + playerScore + "</p>";

        // The html that displays the player's score.
        document.querySelector("#playerScore").innerHTML = html3;


        };