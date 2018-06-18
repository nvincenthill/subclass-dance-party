console.log('This is a TextEditor');

let TextEditor = function(top, left, timeBetweenSteps) {
  Program.call(this);
};

TextEditor.prototype.step = function() {
  this.$node.toggle();
};

TextEditor.prototype = Object.create(Program.prototype);
TextEditor.prototype.constructor = TextEditor;