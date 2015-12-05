$(document).ready(function(){
  
var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0,
  num = 450,
  u = 0,
  _u,
  s, a, b,
  x, y, _x, _y,
  _t = 1 / 60;

var anim = function() {
  $.globalCompositeOperation = 'source-over';
  $.fillStyle = 'hsla(0, 0%, 0%, .75)';
  $.fillRect(0, 0, w, h);
  $.globalCompositeOperation = 'lighter';
  for (var i = 0; i < 2; i++) {
    x = 0;
    _u = (u / 4) + i;
    $.beginPath();
    for (var j = 0; j < num; j++) {
      x -= .72 * Math.sin(4);
      y = x * Math.sin(i + 3.0 * t + x / 20) / 2;
      _x = x * Math.cos(b) - y * Math.sin(b);
      _y = x * Math.sin(b) + y * Math.cos(b);
      b = (j * 3) * Math.PI / 6.8;
      $.lineWidth = .18;
      $.arc(w / 2 - _x, h / 2 - _y, .5, 0, 2 * Math.PI);
    }
    var g = $.createLinearGradient(w / 2 + _x, h / 2 + _y, 0, w / 2 + _x, h / 2 + _y);
    g.addColorStop(0.0, 'hsla(' + (u) + ',85%,50%,1)');
    g.addColorStop(0.5, 'hsla(' + (_u) + ',85%,40%,1)');
    g.addColorStop(1, 'hsla(0,0%,5%,1)');
    $.strokeStyle = g;
    $.stroke();
  }
  t += _t;
  u -= .2;
  window.requestAnimationFrame(anim);
};
anim();

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);
});
