var clock = document.getElementById('clock');
var color = document.getElementById('color');


var cl = function () {
  var time = new Date();
  var h = time.getHours().toString();
  var m = time.getMinutes().toString();
  var s = time.getSeconds().toString();

  if (h.length < 2){
    h = '0' + h;
  }

  if (m.length < 2){
    m = '0' + m;
  }

  if (s.length < 2){
    s = '0' + s;
  }


    var clockTime = h + ':' + m + ':' + s;
    var colorTime = '#' + h + m + s;
    clock.textContent = clockTime;
    color.textContent = colorTime;

    document.body.style.background = colorTime;

}

cl();
setInterval(cl, 1000);
