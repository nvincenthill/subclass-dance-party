let Apple = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.apple;
  this.name = 'Apple';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Apple.prototype = Object.create(Company.prototype);
Apple.prototype.constructor = Apple;

let Facebook = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.facebook;
  this.name = 'Facebook';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Facebook.prototype = Object.create(Company.prototype);
Facebook.prototype.constructor = Facebook;

let Github = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.github;
  this.name = 'Github';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Github.prototype = Object.create(Company.prototype);
Github.prototype.constructor = Github;

let Firefox = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.firefox;
  this.name = 'Firefox';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Firefox.prototype = Object.create(Company.prototype);
Firefox.prototype.constructor = Firefox;

let Slack = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.slack;
  this.name = 'Slack';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Slack.prototype = Object.create(Company.prototype);
Slack.prototype.constructor = Slack;

let Twitter = function(top, left, timeBetweenSteps) {
  Company.apply(this, arguments);
  this.iconPath = data.twitter;
  this.name = 'Twitter';
  this.$node = $(this.iconPath);
  
  this.setPosition(this.top, this.left);

};

Twitter.prototype = Object.create(Company.prototype);
Twitter.prototype.constructor = Twitter;
