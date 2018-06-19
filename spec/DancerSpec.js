describe('Dancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer();
    dancer2 = new Dancer();
    // dancer.step();
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(dancer.$node, 'toggle');
  //   dancer.step();
  //   expect(dancer.$node.toggle.called).to.be.true;
  // });
  it('should set the initial position at a call time', function() {
    expect(typeof dancer.top).to.be.equal('number');
    expect(typeof dancer.left).to.be.equal('number');
  });
  it('should set different postion every instantiation', function() {
    expect(dancer.top).to.be.not.equal(dancer2.top);
    expect(dancer.left).to.be.not.equal(dancer2.left);
  });

  // describe('dance', function() {
  //   it('should call move at least once per second', function() {
  //     sinon.spy(dancer, 'move');
  //     expect(dancer.move.callCount).to.be.equal(0);
  //     clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
  //     clock.tick(timeBetweenSteps);

  //     expect(dancer.move.callCount).to.be.equal(1);

  //     clock.tick(timeBetweenSteps);
  //     expect(dancer.move.callCount).to.be.equal(2);
  //   });
  // });
});
describe('Program', function() {
  var blinkyDancer, clock;
  var timeBetweenSteps = 100;  
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer();
    program = new Program();
    // dancer.step();
  });
  
  it('should have a jQuery $node from superclass', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
    expect(dancer.$node[0].outerText).to.be.equal(program.$node[0].outerText);
  });
  
  it('should have move methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Program.prototype.setPosition);
  });
  it('should have setPosition methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Program.prototype.setPosition);
  });
});

describe('Language', function() {
  var blinkyDancer, clock;
  var timeBetweenSteps = 100;  
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer();
    language = new Language();
    // dancer.step();
  });
  
  it('should have a jQuery $node from superclass', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
    expect(dancer.$node[0].outerText).to.be.equal(language.$node[0].outerText);
  });
  
  it('should have move methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Language.prototype.setPosition);
  });
  it('should have setPosition methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Language.prototype.setPosition);
  });
});

describe('Company', function() {
  var blinkyDancer, clock;
  var timeBetweenSteps = 100;  
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer();
    company = new Company();
    // dancer.step();
  });
  
  it('should have a jQuery $node from superclass', function() {
    console.log(dancer.$node.outerText);
    expect(dancer.$node).to.be.an.instanceof(jQuery);
    expect(dancer.$node[0].outerText).to.be.equal(company.$node[0].outerText);
  });
  
  it('should have move methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Company.prototype.setPosition);
  });
  it('should have setPosition methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Company.prototype.setPosition);
  });
});

describe('Programs', function() {
  var blinkyDancer, clock;
  var timeBetweenSteps = 100;  
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer();
    program = new Program();
    atom = new Atom();
    // dancer.step();
  });
  
  it('should have a jQuery $node from superclass', function() {
    console.log(dancer.$node.outerText);
    expect(dancer.$node).to.be.an.instanceof(jQuery);
    expect(dancer.$node[0].outerText).to.not.equal(atom.$node[0].outerText);
  });
  
  it('should have move methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Atom.prototype.setPosition);
  });
  it('should have setPosition methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Atom.prototype.setPosition);
  });
});

describe('Languages', function() {
  var blinkyDancer, clock;
  var timeBetweenSteps = 100;  
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer();
    language = new Language();
    javascript = new JavaScript();
    // dancer.step();
  });
  
  it('should have a jQuery $node from superclass', function() {
    console.log(dancer.$node.outerText);
    expect(dancer.$node).to.be.an.instanceof(jQuery);
    expect(dancer.$node[0].outerText).to.not.equal(javascript.$node[0].outerText);
  });
  
  it('should have move methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(JavaScript.prototype.setPosition);
  });
  it('should have setPosition methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(JavaScript.prototype.setPosition);
  });
});

describe('Companies', function() {
  var blinkyDancer, clock;
  var timeBetweenSteps = 100;  
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer();
    company = new Company();
    apple = new Apple();
    // dancer.step();
  });
  
  it('should have a jQuery $node from superclass', function() {
    console.log(dancer.$node.outerText);
    expect(dancer.$node).to.be.an.instanceof(jQuery);
    expect(dancer.$node[0].outerText).to.not.equal(apple.$node[0].outerText);
  });
  
  it('should have move methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Apple.prototype.setPosition);
  });
  it('should have setPosition methods from superclass', function() {
    expect(Dancer.prototype.setPosition).to.be.equal(Apple.prototype.setPosition);
  });
});