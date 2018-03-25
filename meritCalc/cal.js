function calc() {
  var t = document.getElementById('t').getElementsByTagName('td');
  var m = document.getElementById('tt').value;
  var i = 1;
  for(var x = 0;x<t.length;x++) {
    if (x%2==0) continue;
    t[x].innerHTML = Math.floor((7.5 + 7.5 / i) * parseInt(m) / 100);
    i++;
  }
}
