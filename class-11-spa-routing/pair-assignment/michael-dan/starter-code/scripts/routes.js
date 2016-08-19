page('/', window.articlesController.index);       // Calls INDEX page
page('/about', window.aboutController.index);    // Calls About page
page('*', function() {                    // Function to pass pages -- TODO
  console.log('This should be a 404 Error Page');
});

page();   // Calls the page function
