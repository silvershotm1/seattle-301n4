(function(module) {
  var aboutController = {};

  // Done: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    console.log('Here\'s the about page');
    $('.tab-content').hide();
    $('#about').fadeIn('slow');
  };

  module.aboutController = aboutController;
})(window);
