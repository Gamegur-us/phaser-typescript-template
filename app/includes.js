require("script!../node_modules/phaser/build/phaser.js");
// require("script!./phaser-tiled.js");
// require("script!./phaser-debug.js");
// require("./styles/main.css")

require([],function(){
  var script=document.createElement('script');
  script.onload=function(){
    var stats=new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop(){stats.update();
      requestAnimationFrame(loop)});
  };
  script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
  document.head.appendChild(script);
});
