$(document).ready(function() {
  window.dancers = [];
  let programs = [Atom, VisualStudios];
  let languages = [JavaScript, CSS];
  let companies = [Apple, Facebook, Github, Firefox];
  let constructors = [];
  for (let i = 0; i < programs.length; i++) {
    constructors.push(programs[i]);
  }
  for (let i = 0; i < companies.length; i++) {
    constructors.push(companies[i]);
  }
  for (let i = 0; i < languages.length; i++) {
    constructors.push(languages[i]);
  }

  $('.header-button-randomdancer').on('click', function(event) {
    let random = Math.floor(Math.random() * constructors.length);
    let icon = new constructors[random]();
    $('.dancefloor').append(icon.$node);
    window.dancers.push(icon);
  });
  
  $('.header-button-randomprogram').on('click', function(event) {
    let random = Math.floor(Math.random() * programs.length);
    let icon = new programs[random]();
    $('.dancefloor').append(icon.$node);
    window.dancers.push(icon);
  });
  
  $('.header-button-randomlanguage').on('click', function(event) {
    let random = Math.floor(Math.random() * languages.length);
    let icon = new languages[random]();
    $('.dancefloor').append(icon.$node);
    window.dancers.push(icon);
  });
  
  $('.header-button-randomcompany').on('click', function(event) {
    let random = Math.floor(Math.random() * companies.length);
    let icon = new companies[random]();
    $('.dancefloor').append(icon.$node);
    window.dancers.push(icon);
  });
  
});

