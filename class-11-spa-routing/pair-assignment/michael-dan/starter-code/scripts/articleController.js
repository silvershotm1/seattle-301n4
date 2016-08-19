(function(module) {
  var articlesController = {};

  // Done: Create the `articles` table when the controller first loads, with the code that used to be in index.html:
  module.Article.createTable();                        //creates table
  module.Article.fetchAll(articleView.initIndexPage);  // function to render table

  // Done: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Done: Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn('slow');
  };

  module.articlesController = articlesController;
})(window);
