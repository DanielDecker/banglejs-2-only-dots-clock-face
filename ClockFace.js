;(function () {
  exports.draw = function draw (Settings, CenterX, CenterY, outerRadius) {
    let sin = Math.sin, cos = Math.cos;
    let twoPi = 2*Math.PI;

    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');

    outerRadius -= 5;

    for (let i = 0; i < 12; i++) {
      let Phi = i * twoPi/12;

      let x = CenterX + outerRadius * sin(Phi);
      let y = CenterY - outerRadius * cos(Phi);

      g.fillCircle(x,y, 3);
    }
  };
})();
