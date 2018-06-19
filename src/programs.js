let Atom = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.atom;
  this.name = 'Atom';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};



Atom.prototype = Object.create(Program.prototype);
Atom.prototype.constructor = Atom;

let VisualStudios = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.visualstudios;
  this.name = 'VisualStudios';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};



VisualStudios.prototype = Object.create(Program.prototype);
VisualStudios.prototype.constructor = VisualStudios;

let Amazonwebservices = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.amazonwebservices;
  this.name = 'Amazonwebservices';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};



Amazonwebservices.prototype = Object.create(Program.prototype);
Amazonwebservices.prototype.constructor = Amazonwebservices;

let Angular = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.angular;
  this.name = 'Angular';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};



Angular.prototype = Object.create(Program.prototype);
Angular.prototype.constructor = Angular;

let Explorer = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.explorer;
  this.name = 'Explorer';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};



Explorer.prototype = Object.create(Program.prototype);
Explorer.prototype.constructor = Explorer;

let Node = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.node;
  this.name = 'Node';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};



Node.prototype = Object.create(Program.prototype);
Node.prototype.constructor = Node;

let Chrome = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.chrome;
  this.name = 'Chrome';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Chrome.prototype = Object.create(Program.prototype);
Chrome.prototype.constructor = Chrome;

