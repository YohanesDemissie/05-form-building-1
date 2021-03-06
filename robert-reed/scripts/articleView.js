'use strict';

let articleView = {};

articleView.populateFilters = () => {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      let val = $(this).find('address a').text();
      let optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = () => {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = () => {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = () => {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = () => {
  $('.article-body').each( function() {$(this).children().first().nextAll().hide();});
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    // QUESTION: Refactored 10 lines into 2. Woop! (That wasn't a question, I tricked you.)
    $(this).parent().find('.article-body').each( function() {$(this).children().first().nextAll().fadeToggle();});
    $(this).text() === 'Read on →' ? $(this).html('Show Less &larr;') : $(this).html('Read on &rarr;');
  });
};

// COMMENTED: Where is this function called? Why?
// This function is called at the bottom of new.html and is used to setup the default view of the page. This same js file is also referenced in index.html, so this approach allows us to pick and choose what gets run on each pageload.
articleView.initNewArticlePage = () => {
  // DONE: Ensure the main .tab-content area is revealed. We might add more tabs later or otherwise edit the tab navigation.
  // $( '.tab-content' ).show();
  articleView.handleMainNav();

  // DONE: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we have data to export.
  $( '#article-export' ).hide();

  $('#article-json').on('focus', function(){
    this.select();
  });

  // DONE: Add an event handler to update the preview and the export field if any inputs change.
  $( '#new-form' ).on( 'change', 'input, textarea', () => articleView.create() );
};

articleView.create = () => {
  // DONE: Set up a variable to hold the new article we are creating.
  // Clear out the #articles element, so we can put in the updated preview
  $( '#articles' ).html( '' );
  // DONE: Instantiate an article based on what's in the form fields:
  let d = new Date();
  let newArticle = new Article( {
    title: $( '#article-title' ).val(),
    category: $( '#article-category' ).val(),
    author: $( '#article-author' ).val(),
    authorUrl: $( '#article-author-url' ).val(),
    publishedOn: $( '#article-publish' ).is( ':checked' ) ? `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() + 1}` : null,
    body: marked($( '#article-body' ).val())
  } );

  // DONE: Use our interface to the Handblebars template to put this new article into the DOM:
  $('#articles').append(newArticle.toHtml());
  articleView.setTeasers();

  // DONE: Activate the highlighting of any code blocks; look at the documentation for hljs to see how to do this by placing a callback function in the .each():
  $('pre code').each( function() {
    hljs.highlightBlock(this);
  });

  // DONE: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
  $( '#article-export' ).show().find( 'input' ).val( JSON.stringify( newArticle ) );
};

// DONE: Where is this function called? Why?
// This function is called at the bottom of index.html and is used to setup the default view of the page. This same js file is also referenced in new.html, so this approach allows us to pick and choose what gets run on each pageload.
articleView.initIndexPage = () => {
  articles.forEach(article => $('#articles').append(article.toHtml())); // eslint-disable-line
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
  hljs.initHighlightingOnLoad();
};
