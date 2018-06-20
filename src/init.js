$(document).ready(function() {
  window.dancers = [];
  let programs = [
    Atom,
    VisualStudios,
    Amazonwebservices,
    Explorer,
    Node,
    Chrome
  ];
  let languages = [JavaScript, Angular, CSS, Csharp, Cplusplus, Php, Python, Ruby, Git];
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
    for (let i = 0; i < constructors.length; i++) {
      let icon = new constructors[i]();
      $('.dancefloor').append(icon.$node);
      window.dancers.push(icon);
    }
  });
  
  // clear all
  $('.header-button-clearall').on('click', function(event) {
    dancers.forEach((dancer) => {
      dancer.$node.attr('class', 'dancer devicon-git-plain animated zoomOut');
    });
    setTimeout(function() { $('.dancer').remove(); }, 1000);
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
      if (startLeft > viewportWidth - 150) {
        startTop += 150;
        startLeft = 50;
      }
    });
  });
  
  // on click effects
  $(document).on('click', '.dancer', function(event) {
    $(this).removeClass('bounce');
    $(this).removeClass('rubberBand');
    $(this).removeClass('jello');
    $(this).addClass('flash');
  });
});
