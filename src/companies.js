let Apple = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.apple;
  this.name = 'Apple';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Apple.prototype = Object.create(Company.prototype);
Apple.prototype.constructor = Apple;

let Facebook = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.facebook;
  this.name = 'Facebook';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Facebook.prototype = Object.create(Company.prototype);
Facebook.prototype.constructor = Facebook;

let Github = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.github;
  this.name = 'Github';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Github.prototype = Object.create(Company.prototype);
Github.prototype.constructor = Github;

let Firefox = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.firefox;
  this.name = 'Firefox';
  console.log(this);
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Firefox.prototype = Object.create(Company.prototype);
Firefox.prototype.constructor = Firefox;
