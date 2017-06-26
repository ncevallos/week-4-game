//initialize variables below
var wins = 0;
var losses = 0;
var playerScore = 0;
var goalScore = 0;
var crystalValues = [0, 0, 0, 0];
initializeCrystalValues();
//initialize player's score, which will be zero but will be dynamcially updated as the player clicks on crystals

//initialize variable for player's goal score to achieve, between 19 -120
//perhaps initialize as a function that is called on start of game and can be called later when a players wins/loses so that it resets.
function initializeCrystalValues(){
	goalScore  = [Math.floor(Math.random() * (120-19)) + 19];
	playerScore = 0;
	for(i=0; i<4; i++){
		crystalValues[i] = [Math.floor(Math.random() * (12-1)) + 1];

		console.log("new goalScore is " + goalScore);
	}
}
for(i=0; i<4; i++){
		console.log("spot at: " +i+ " = " +crystalValues[i]);
	}
//after each click on a crystal the game must run through a for loop determining whether the players current score is less than, equal to, or greater than the goal score and respond correctly to such.

 $(document).ready(function() {
 $("#blueCrystal0").on("click", function() {
    playerScore = playerScore+parseInt(crystalValues[0]);
    console.log(playerScore);
    checkScore();
 });
 $("#greenCrystal1").on("click", function() {
    playerScore = playerScore+parseInt(crystalValues[1]);
    console.log(playerScore);
    checkScore();
 });
 $("#purpleCrystal2").on("click", function() {
    playerScore = playerScore+parseInt(crystalValues[2]);
    console.log(playerScore);
    checkScore();
 });
 $("#redCrystal3").on("click", function() {
    playerScore = playerScore+parseInt(crystalValues[3]);
    console.log(playerScore);
    checkScore();
 });
 });
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
//whenever the player wins or loses run a reset functions that resets and starts all the values to the game.

document.onclick = function(event) {

	//change from on key up to when the page loads.
        var html =
          "<p>Goal Score: " + goalScore + "</p>";

        // The html that displays the losses, wins, and guesses left.
        document.querySelector("#goalScore").innerHTML = html;

        var html2 =
          "<p>Wins: " + wins + "<br>" +
          "Losses: " + losses + "</p>";

        // The html that displays the losses, wins, and guesses left.
        document.querySelector("#gameText").innerHTML = html2;

        var html3 =
          "<p>" + playerScore + "</p>";

        // The html that displays the losses, wins, and guesses left.
        document.querySelector("#playerScore").innerHTML = html3;


        };