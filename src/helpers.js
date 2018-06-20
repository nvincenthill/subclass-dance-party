let getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let styleDancefloor = function(red1, red2, green1, green2, blue1, blue2) {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256));
  var hue2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256));
  let styleSettings = {
    background: `linear-gradient(${hue}, .75), ${hue2}, 0.85))`
  };
  $('.dancefloor').css(styleSettings);
};