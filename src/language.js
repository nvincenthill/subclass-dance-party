let Language = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
  this.moving = false;
};

Language.prototype = Object.create(Dancer.prototype);
Language.prototype.constructor = Language;

Language.prototype.toggleMotion = function() {
  if (this.moving) {
    this.moving = !this.moving;
  }
  
  if ($(this).hasClass('animated')) {
    $(this).removeClass('animated');
  } else {
    $(this).addClass('animated');
  }
};