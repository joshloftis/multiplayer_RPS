var config = {
  apiKey: "AIzaSyDyumcsYscDN3FeA7dRk5NPP06yeiini2w",
  authDomain: "rock-paper-scissors-73f3c.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-73f3c.firebaseio.com",
  projectId: "rock-paper-scissors-73f3c",
  storageBucket: "",
  messagingSenderId: "622403492860"
};
firebase.initializeApp(config);

var choices = ["rock", "paper", "scissors"];
var user1Ans;
var user2Ans;
var user1Wins = 0;
var user1Losses= 0;
var user2Wins = 0;
var user2Losses = 0;
var ties = 0;

function evalGame() {
  if ((user1Ans === "rock") || (user1Ans === "paper") || (user1Ans === "scissors")) {
    if ((user1Ans === "rock") && (user2Ans === "scissors")) {
      wins++;
    } else if ((user1Ans === "rock") && (user2Ans === "paper")) {
      losses++;
    } else if ((user1Ans === "scissors") && (user2Ans === "rock")) {
      losses++;
    } else if ((user1Ans === "scissors") && (user2Ans === "paper")) {
      wins++;
    } else if ((user1Ans === "paper") && (user2Ans === "rock")) {
      wins++;
    } else if ((user1Ans === "paper") && (user2Ans === "scissors")) {
      losses++;
    } else if (user1Ans === user2Ans) {
      ties++;
    }
  }
}
