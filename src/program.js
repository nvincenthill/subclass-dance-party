let Program = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
  this.moving = false;
  this.class = 'program dancer devicon-git-plain animated zoomInDown';
  let context = this;
  setInterval(function() { context.move(); }, 1);
  
};

Program.prototype = Object.create(Dancer.prototype);
Program.prototype.constructor = Program;

Program.prototype.move = function() {
  if (this.moving) {
    this.top = this.top - 1;
    this.left = this.left - 1;
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
  }
};

