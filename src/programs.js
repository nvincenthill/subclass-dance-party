let Atom = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.atom;
  this.name = 'Atom';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Atom.prototype.step = function() {
  this.$node.toggle();
};

Atom.prototype = Object.create(Program.prototype);
Atom.prototype.constructor = Atom;

let VisualStudios = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.visualstudios;
  this.name = 'VisualStudios';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

VisualStudios.prototype.step = function() {
  this.$node.toggle();
};

VisualStudios.prototype = Object.create(Program.prototype);
VisualStudios.prototype.constructor = VisualStudios;

let Amazonwebservices = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.amazonwebservices;
  this.name = 'Amazonwebservices';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Amazonwebservices.prototype.step = function() {
  this.$node.toggle();
};

Amazonwebservices.prototype = Object.create(Program.prototype);
Amazonwebservices.prototype.constructor = Amazonwebservices;

let Angular = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.angular;
  this.name = 'Angular';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Angular.prototype.step = function() {
  this.$node.toggle();
};

Angular.prototype = Object.create(Program.prototype);
Angular.prototype.constructor = Angular;

let Explorer = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.explorer;
  this.name = 'Explorer';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Explorer.prototype.step = function() {
  this.$node.toggle();
};

Explorer.prototype = Object.create(Program.prototype);
Explorer.prototype.constructor = Explorer;

let Node = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.node;
  this.name = 'Node';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Node.prototype.step = function() {
  this.$node.toggle();
};

Node.prototype = Object.create(Program.prototype);
Node.prototype.constructor = Node;

let Chrome = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  this.iconPath = data.chrome;
  this.name = 'Chrome';
  console.log(this);
  this.$Chrome = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Chrome.prototype.step = function() {
  this.$Chrome.toggle();
};

Chrome.prototype = Object.create(Program.prototype);
Chrome.prototype.constructor = Chrome;

