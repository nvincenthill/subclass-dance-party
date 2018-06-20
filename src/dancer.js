// Creates and returns a new dancer object that can step
let Dancer = function() {
  this.name = 'Dancer';
  let viewportWidth = $(window).width();
  let viewportHeight = $(window).height();
  this.top = getRandomInt(viewportHeight * .22, viewportHeight - 110);
  this.left = getRandomInt(50, viewportWidth - (viewportWidth * .1));

  this.timeBetweenSteps = 150;

  this.$node = $(
    '<p>Should NOT SEE THIS</p>'
  );

  this.setPosition(this.top, this.left);
  
};

// Dancer.prototype.step = function() {
//   // the basic this doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   let context = this;

//   setInterval(function() { context.move(); }, 1);
// };

Dancer.prototype.setPosition = function(top, left) {
  let styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.move = function() {
  if (this.moving) {
    this.top = this.top + 1;
    this.left = this.left + 1;
    let styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
  }
};

Dancer.prototype.toggleMotion = function() {
  if (this.moving) {
    this.moving = !this.moving;
  }
};

Dancer.prototype.moveTo = function(top, left, time) {

};
