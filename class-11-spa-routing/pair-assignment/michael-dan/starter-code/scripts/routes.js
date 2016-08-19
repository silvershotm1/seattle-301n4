// TODO: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
page('/', articlesController.index);       // Calls INDEX page
page('/about', aboutController.index);    // Calls About page
page('*', function() {                    // Function to pass pages -- TODO
    console.log('This should be a 404 Error Page');
});
// TODO: What function do you call to activate page.js? Fire it off now, to execute!

page();   // Calls the page function
