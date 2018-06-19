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

let Csharp = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.csharp;
  this.name = 'Csharp';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Csharp.prototype = Object.create(Language.prototype);
Csharp.prototype.constructor = Csharp;

let C = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.C;
  this.name = 'c';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

C.prototype = Object.create(Language.prototype);
C.prototype.constructor = C;

let Cplusplus = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.cplusplus;
  this.name = 'Cplusplus';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Cplusplus.prototype = Object.create(Language.prototype);
Cplusplus.prototype.constructor = Cplusplus;

let Php = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.php;
  this.name = 'Php';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Php.prototype = Object.create(Language.prototype);
Php.prototype.constructor = Php;

let Python = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.python;
  this.name = 'Python';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Python.prototype = Object.create(Language.prototype);
Python.prototype.constructor = Python;

let Ruby = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.ruby;
  this.name = 'Ruby';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Ruby.prototype = Object.create(Language.prototype);
Ruby.prototype.constructor = Ruby;

