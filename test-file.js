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
  var text = readTextFile("README.md", "utf-8");
  print(text);
}

