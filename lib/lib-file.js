// File library for mizolla/rhino

function file_exists(path) {
  var f = new java.io.File(path);
  return f.exists();
}

function is_file(path) {
  var f = new java.io.File(path);
  return f.isFile();
}
function is_dir(path) {
  var f = new java.io.File(path);
  return f.isDirectory();
}

function glob(path, mask_re) {
  if (mask_re == undefined) mask_re = /.+/;
  var dir = new java.io.File(path);
  var files = dir.list();
  var r = [];
  for (var i = 0; i < files.length; i++) {
    var f = ""+files[i];
    if (f.match(mask_re)) r.push(f);
  }
  return r;
}

function glob_r(dirname, callback) {
  var file = new java.io.File(dirname);
  r_search(file);
  function r_search(file) {
    if (file.isFile()) {
      callback(file);
      return;
    }
    if (file.isDirectory()) {
      var ls = file.listFiles();
      for (var i = 0; i < ls.length; i++) {
        var f = ls[i];
        if (f.isFile()) {
          callback(f);
        }
        else if (f.isDirectory()) {
          r_search(f);
        }
      }
    }
  }
}

function readTextFile(fname, charset) { // for Nashorn
  var Files = java.nio.file.Files;
  var Paths = java.nio.file.Paths;

  var bytes = Files.readAllBytes(Paths.get(fname));
  var text = new java.lang.String(bytes, charset);
  return "" + text;
}

function writeFile(fname, text, charset) {
  var osw = new java.io.OutputStreamWriter(
    new java.io.FileOutputStream(fname),
    charset);
  osw.write(text, 0, text.length);
  osw.close();
}

function readFileBinary(filename) {
  var f = new java.io.File(filename);
  var data = java.lang.reflect.Array.newInstance(
    java.lang.Byte.TYPE, f.length());
  var bis = new java.io.BufferedInputStream(
    new java.io.FileInputStream(f));
  bis.read(data);
  bis.close();
  return data;
}

function saveBinary(filename, bytes) {
  var fos = new java.io.FileOutputStream(filename);
  fos.write(bytes);
  fos.close();
}

function getCurrentDir() {
  var f = new java.io.File(".");
  return f.getAbsoluteFile().getParent();
}



