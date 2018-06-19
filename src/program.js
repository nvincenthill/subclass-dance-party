let Program = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
};

Program.prototype.step = function() {
  this.$node.toggle();
};

Program.prototype = Object.create(Dancer.prototype);
Program.prototype.constructor = Program;