let Language = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
};

Language.prototype = Object.create(Dancer.prototype);
Language.prototype.constructor = Language;