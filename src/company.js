let Company = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
};

Company.prototype = Object.create(Dancer.prototype);
Company.prototype.constructor = Company;