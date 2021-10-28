var auth = document.getElementById("author");
var articletitle = document.getElementById("title");
var pub = document.getElementById("publisher");
var articledate = document.getElementById("date");
var articlelink = document.getElementById("link");
function makecite(){
  document.getElementById('final').innerHTML = auth.value + ', ' + title.value + ', ' + pub.value + ', ' + articledate.value + ', ' + articlelink.value;
}
