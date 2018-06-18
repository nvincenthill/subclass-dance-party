console.log('This is a program');

let Program = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
};

Program.prototype.step = function() {
  this.$node.toggle();
};

Program.prototype = Object.create(Dancer.prototype);
Program.prototype.constructor = Program;