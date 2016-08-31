(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  // WHAT IS BEING DONE:
  // 1. Page.js is being called when the URL is /article/:id it fires the loadById method.
  // 2.Create function as articleData that accepts articles data by selected id and attaches it to the context object. Fires the next callback.
  // 3. findWhere method queries web sql for id. It gets the ID from the ctx.params.id and replaces plus with space. When query is done, it passes the query data into the callback function which is the articleData function.
  // The execution path is page('/article/:id')

  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  // WHAT IS BEING DONE:
  // 1. Page.js is being called when the URL is /author/:authorName it fires the loadByAuthor method.
  // 2.Create function as authorData that accepts articles data by selected author and attaches it to the context object. Fires the next callback.
  // 3. findWhere method queries web sql for author, then searches from routes.js /:authorName and replaces plus with space. When query is done, it passes the query data into the author data function.
  // The execution path is page('/author/:authorName')


  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      console.log(articlesByAuthor);
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  // WHAT IS BEING DONE:
  // 1. Page.js is being called when the URL is /category/:categoryName it fires the loadByCategory method.
  // 2.Create function as categoryData that accepts articles data by selected category and attaches it to the context object. Fires the next callback.
  // 3. findWhere method queries web sql for author, then searches from routes.js /:categoryName and replaces plus with space. When query is done, it passes the query data into the category data function.

  // The execution path is page('/category/:categoryName')
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      console.log(articlesInCategory);

      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  // WHAT IS BEING DONE:
  // 1. Page.js is being called when the URL is /category/:categoryName it fires the loadByCategory method.
  // 2. loadAll creates a function called articleData that accepts allArticles as an argument, attaches it to the ctx object, and fires the next callback.
  // 3. loadAll then checks if the Article object all array has data. If it does, it attaches the array to the ctx object and fires the next callback. Otherwise, it calls the fetchAll method to get the data and passes the articleData function as a callback.

  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);
