let Atom = function(top, left, timeBetweenSteps) {
  TextEditor.apply(this, arguments);
  this.iconPath = data.atom;
  this.name = 'Atom';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Atom.prototype.step = function() {
  this.$node.toggle();
};

Atom.prototype = Object.create(TextEditor.prototype);
Atom.prototype.constructor = Atom;

let VisualStudios = function(top, left, timeBetweenSteps) {
  TextEditor.apply(this, arguments);
  this.iconPath = data.visualstudios;
  this.name = 'VisualStudios';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

VisualStudios.prototype.step = function() {
  this.$node.toggle();
};

VisualStudios.prototype = Object.create(TextEditor.prototype);
VisualStudios.prototype.constructor = VisualStudios;

