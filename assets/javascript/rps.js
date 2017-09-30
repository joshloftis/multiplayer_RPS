//Firebase Globals
//-----------------------------------------------------------------------------------------------------------------------------
//
var config = {
  apiKey: "AIzaSyDDvsswWgJUcWOuH_obLC_ZDQzs239drBI",
  authDomain: "rock-paper-scissors-mp-game-gt.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-mp-game-gt.firebaseio.com",
  projectId: "rock-paper-scissors-mp-game-gt",
  storageBucket: "",
  messagingSenderId: "571149025620"
};
firebase.initializeApp(config);

var db = firebase.database();
var currentUsers = db.ref('/users');
var consRef = db.ref("/connections");
var conInfo = db.ref(".info/connected");
var choices = ["rock", "paper", "scissors"];
var users = {
  userOne: {
    name: 'Josh',
    id: 0,
    wins: 0,
    losses: 0,
    currentPlay: ''
  },
  userTwo: {
    name: '',
    id: 0,
    wins: 0,
    losses: 0,
    currentPlay: ''
  }
};

currentUsers.set(users);

conInfo.on('value', function(snap) {
  if (snap.val()){
    var con = consRef.push(true);
    con.onDisconnect().remove();
  }
});

consRef.on('value', function(snap) {
  if (snap.numChildren() == 1) {
    console.log("You're the first one here");
  } else if (snap.numChildren() == 2) {
    console.log("You're the second one here");
  }
});

currentUsers.on('value', function(snap) {
  console.log(snap.val().userOne.name);
});
