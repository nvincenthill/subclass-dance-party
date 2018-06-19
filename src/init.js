$(document).ready(function() {
  window.dancers = [];
  let programs = [
    Atom,
    VisualStudios,
    Amazonwebservices,
    Angular,
    Explorer,
    Node,
    Chrome
  ];
  let languages = [JavaScript, CSS, Csharp, Cplusplus, Php, Python, Ruby];
  let companies = [Apple, Facebook, Github, Firefox, Slack, Twitter];
  let constructors = [];
  let viewportWidth = $(window).width();
  let viewportHeight = $(window).height();
  for (let i = 0; i < programs.length; i++) {
    constructors.push(programs[i]);
  }
  for (let i = 0; i < companies.length; i++) {
    constructors.push(companies[i]);
  }
  for (let i = 0; i < languages.length; i++) {
    constructors.push(languages[i]);
  }


  // add a random dancer
  $('.header-button-randomdancer').on('click', function(event) {
    let random = Math.floor(Math.random() * constructors.length);
    let icon = new constructors[random]();
    $('.dancefloor').append(icon.$node);
    window.dancers.push(icon);
  });
    
  // add a random program
  $('.header-button-randomprogram').on('click', function(event) {
    let random = Math.floor(Math.random() * programs.length);
    let icon = new programs[random]();
    $('.dancefloor').append(icon.$node);
    window.dancers.push(icon);
  });
  
  // add a random language
  $('.header-button-randomlanguage').on('click', function(event) {
    let random = Math.floor(Math.random() * languages.length);
    let icon = new languages[random]();
    $('.dancefloor').append(icon.$node);
    window.dancers.push(icon);
  });
  
  // add a random company
  $('.header-button-randomcompany').on('click', function(event) {
    let random = Math.floor(Math.random() * companies.length);
    let icon = new companies[random]();
    $('.dancefloor').append(icon.$node);
    window.dancers.push(icon);
  });
  
  // add all
  $('.header-button-addall').on('click', function(event) {
    console.log(constructors);
    for (let i = 0; i < constructors.length; i++) {
      let icon = new constructors[i]();
      $('.dancefloor').append(icon.$node);
      window.dancers.push(icon);
    }
  });
  
  // clear all
  $('.header-button-clearall').on('click', function(event) {
    // animate it out
    console.log($('.dancer'));
    // for (let i = 0; i < $('.dancer').length; i++) {
    //   $('.dancer')[i].$node.addClass('animated zoomOutTop');
    // }
    
    dancers.forEach((dancer) => {
      $(dancer.$node).addClass('zoomOutTop');
    });
    
    // remove it from dom after one second
    // setTimeout(function() { $('.dancer').remove(); }, 1000);
    
    window.dancers = [];
  });
  
  // set the lineup
  $('.header-button-lineup').on('click', function(event) {
    let startLeft = 50;
    let startTop = 175;
    dancers.forEach((dancer) => {
      $(dancer.$node).animate({
        left: `${startLeft}`,
        top: `${startTop}`
      }, 1000, dancers.toggleMotion);
      startLeft += 125;
      if (startLeft > viewportWidth - 100) {
        startTop += 125;
        startLeft = 50;
      }
    });
  });
  
  
});
