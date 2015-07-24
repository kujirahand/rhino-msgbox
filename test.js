// test

// load library
load("lib/lib-msgbox.js");

// MessageBox test
msgbox.showMessage("Hello World!");

// inputBox
var name = msgbox.inputBox("What is your name?", "Mike");
msgbox.showMessage("Hello, " + name + " !");

// select button
var sel = msgbox.selectButtons(
  "Which color do u like?",
  ["Blue", "Red", "Green"]);
msgbox.showMessage("You like " + sel);

