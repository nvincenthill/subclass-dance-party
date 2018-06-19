let Company = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
  this.moving = false;
};

Company.prototype = Object.create(Dancer.prototype);
Company.prototype.constructor = Company;

Company.prototype.toggleMotion = function() {
  if (this.moving) {
    this.moving = !this.moving;
  }
};
