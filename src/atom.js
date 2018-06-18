console.log('This is a Atom');

let Atom = function(top, left, timeBetweenSteps) {
  let name = 'Atom';
  this.$node = $('<p>Atom</p>');
  TextEditor.call(this);
};

Atom.prototype.step = function() {
  this.$node.toggle();
};

Atom.prototype = Object.create(TextEditor.prototype);
Atom.prototype.constructor = Atom;