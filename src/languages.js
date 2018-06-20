let JavaScript = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.javascript;
  this.name = 'JavaScript';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

JavaScript.prototype = Object.create(Language.prototype);
JavaScript.prototype.constructor = JavaScript;

let CSS = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.css;
  this.name = 'CSS';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

CSS.prototype = Object.create(Language.prototype);
CSS.prototype.constructor = CSS;

let Csharp = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.csharp;
  this.name = 'Csharp';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Csharp.prototype = Object.create(Language.prototype);
Csharp.prototype.constructor = Csharp;

let Cplusplus = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.cplusplus;
  this.name = 'Cplusplus';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Cplusplus.prototype = Object.create(Language.prototype);
Cplusplus.prototype.constructor = Cplusplus;

let Php = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.php;
  this.name = 'Php';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Php.prototype = Object.create(Language.prototype);
Php.prototype.constructor = Php;

let Python = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.python;
  this.name = 'Python';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Python.prototype = Object.create(Language.prototype);
Python.prototype.constructor = Python;

let Ruby = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.ruby;
  this.name = 'Ruby';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Ruby.prototype = Object.create(Language.prototype);
Ruby.prototype.constructor = Ruby;

let Git = function(top, left, timeBetweenSteps) {
  Language.apply(this, arguments);
  this.iconPath = data.git;
  this.name = 'Git';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Git.prototype = Object.create(Language.prototype);
Git.prototype.constructor = Git;
