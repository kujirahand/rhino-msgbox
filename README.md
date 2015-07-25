# rhino-msgbox
Utility Library for Mozilla Rhino (JavaScript Engine on JRE)

 - Message Box Library --- lib-msgbox.js
 - File Utility Library --- lib-file.js

## Message Box example

```
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
```

## File Utility example

```
// load file library
load("lib/lib-file.js");

// glob files
print("glob ./");
var files = glob("./");

// is_file / is_dir 
for (var i in files) {
  var f = files[i];
  if (is_file(f)) print("- file:" + f);
  if (is_dir(f))  print("- dir :" + f);
}

print(" --- --- --- ");

// glob_r
print("glob_r ./");
glob_r("./", function (path) {
  print("- " + path);
});

print(" --- --- --- ");

if (file_exists("README.md")) {
  var text = readFile("README.md", "utf-8");
  print(text);
}
```


