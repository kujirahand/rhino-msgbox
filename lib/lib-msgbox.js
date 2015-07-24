// JOptionPane library

(function(root){
// import package
importPackage(
  Packages.javax.swing,
  java.awt
);
if (root.msgbox) return;
var msgbox = root.msgbox = {};
msgbox.parent = null; // parent object

// Message Dialog
msgbox.showMessage = function (msg) {
  JOptionPane.showMessageDialog(this.parent, msg);      
};
// Input Dialog
msgbox.inputBox = function (msg, def_value) {
  var r = JOptionPane.showInputDialog(this.parent, msg, def_value);
  if (r) return r;
  return null;
};

var option2str = function (rc) {
  switch (rc) {
  case JOptionPane.YES_OPTION:    return "Yes";
  case JOptionPane.NO_OPTION:     return "No";
  case JOptionPane.CANCEL_OPTION: return "Cancel";
  case JOptionPane.CLOSED_OPTION: return "Cancel";
  default: return "Unknown";
  }
};

// Yes / No / Cancel
msgbox.selectYesNoCancel = function (msg) {
  var rc = JOptionPane.showConfirmDialog(
    this.parent, msg, null,
    JOptionPane.YES_NO_CANCEL_OPTION);
  return option2str(rc);
};
// Yes / No
msgbox.selectYesNo = function (msg) {
  var rc = JOptionPane.showConfirmDialog(
    this.parent, msg, null,
    JOptionPane.YES_NO_OPTION);
  return option2str(rc);
};
// confirm : boolean
msgbox.confirm = function (msg) {
  var rc = JOptionPane.showConfirmDialog(
    this.parent, msg, null,
    JOptionPane.YES_NO_OPTION);
  return (rc == JOptionPane.YES_OPTION);
};
// Ok / Cancel 
msgbox.selectOkCancel = function (msg) {
  var rc = JOptionPane.showConfirmDialog(
    this.parent, msg, null,
    JOptionPane.OK_CANCEL_OPTION);
  return option2str(rc);
};
// Select Buttons
msgbox.selectButtons = function (msg, label_a) {
  var sa = java.lang.reflect.Array.newInstance(
    java.lang.String, label_a.length);
  for (var i in label_a) {
    sa[i] = label_a[i];
  }
  var rc = JOptionPane.showOptionDialog(
    this.parent,
    msg, null,
    JOptionPane.DEFAULT_OPTION, JOptionPane.INFORMATION_MESSAGE,
    null, sa, sa[0]);
  if (rc < 0) return null;
  return new String(label_a[rc]);
};

// var a = msgbox.inputBox("hello?");
// msgbox.showMessage(a);

// var a = msgbox.selectYesNoCancel("hello?");
// msgbox.showMessage(a);

// var a = msgbox.selectYesNo("hello?");
// msgbox.showMessage(a);

// var a = msgbox.selectButtons("hello?",[
//   "今日の天気は晴れです。",
//   "今日の天気は雨です。","今日は曇りでした。"]);
// msgbox.showMessage(a);

// var a = msgbox.inputBox("hello", "def");
// msgbox.showMessage(a);

var a = msgbox.confirm("hello");
msgbox.showMessage(a);

})(this);

