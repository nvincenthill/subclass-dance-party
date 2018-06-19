let TextEditor = function(top, left, timeBetweenSteps) {
  Program.apply(this, arguments);
  // this.top = top;
  // this.left = left;
};

TextEditor.prototype.step = function() {
  this.$node.toggle();
};

TextEditor.prototype = Object.create(Program.prototype);
TextEditor.prototype.constructor = TextEditor;