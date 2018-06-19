let JavaScript = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.javascript;
  this.name = 'JavaScript';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

JavaScript.prototype = Object.create(Language.prototype);
JavaScript.prototype.constructor = JavaScript;

let CSS = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.css;
  this.name = 'CSS';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

CSS.prototype = Object.create(Language.prototype);
CSS.prototype.constructor = CSS;

