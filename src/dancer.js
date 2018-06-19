

// Creates and returns a new dancer object that can step
let Dancer = function() {
  this.name = 'Dancer';
  this.top = ($('.dancefloor').height() * Math.random()) + 40;
  this.left = $('.dancefloor').width() * Math.random();

  this.timeBetweenSteps = 100;

  this.$node = $('<svg class="dancer devicon-git-plain" viewBox="0 0 128 128"><path fill="#F7A80D" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345v-22.876l-16.297-6.503zm34.276 0l-15.073 5.739v21.575l15.073-6.121v-21.193zM73.206 15.035l-11.476 4.896 10.635 4.515 12.241-4.515-11.4-4.896zm-15.914 6.503v22.034l14.231 4.132.459-20.046-14.69-6.12zm31.828 1.224l-13.466 5.738v21.652l13.466-6.121v-21.269zM19.306 46.047l-11.399 4.897 10.558 4.514 12.241-4.514-11.4-4.897zm-17.138 6.121l-.382 22.034 16.679 7.345v-22.876l-16.297-6.503zm34.275 0l-15.071 5.738v21.574l15.071-6.12v-21.192zM56.03 45.231l-11.4 4.897 10.558 4.514 12.241-4.514-11.399-4.897zm-17.137 6.121l-.383 22.035 16.679 7.345v-22.877l-16.296-6.503zm34.275 0l-15.072 5.738v21.576l15.072-6.121v-21.193zM109.076 15.035l-11.399 4.896 10.559 4.515 12.241-4.515-11.401-4.896zm-17.137 6.121l-.382 22.034 16.679 7.344v-22.876l-16.297-6.502zm34.275 0l-15.071 5.738v21.575l15.071-6.12v-21.193z"></path></svg>');

  this.setPosition(this.top, this.left);
  let context = this;
  setInterval(function() { context.move(); }, this.timeBetweenSteps);

};

// Dancer.prototype.step = function() {
//   // the basic this doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   let context = this;

//   setInterval(function() { context.move(); }, 1);
// };

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.move = function() {

  this.top = this.top + Math.floor(Math.random() * 4) - 1;
  this.left= this.left + Math.floor(Math.random() * 4) - 1;

  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};