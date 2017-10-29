# 05-form-building

**Author**: Robert Reed
**Version**: 1.0.5

## Overview
Our goal with this project was to build a mobile-first site, using jQuery to dynamically render blog posts sorted by most recent publication date. Additional functionality includes being able to sort the articles by author and category from drop down lists. Also, only a preview of each article is shown, and a read more button, when pressed, reveals the entire article. A read less button allows you to collapse the full article. A template allows you to create your own blog posts.

## Getting Started
To build this app on your own machine, clone this repo and launch the html page in your browser.

## Architecture
We are using a SMACSS organization for our CSS. We are using jQuery to dynamically render and manipulate DOM elements. We are using handlebars.js to template our blog articles. HighlightJS is used for syntax highlighting in articles, and MarkedJS incorporates markdown style formatting for the blog posts.

## Change Log
Added functionality for users to write their own blog posts.

Users can write a post incorporating `syntax highlighting`, and Markdown style formatting.

Users can preview their articles before publishing them, and chose to publish or hide their articles.

- Fixed broken script paths
- Refactored `Article` constructor to loop instantiate object
- Refactored `setTeasers()` method to show/hide in 2 lines instead of 10

## Credits and Collaborations
Created by Robert Reed, based off of source code from the Code Fellows 301 lab repo. We used the clearfix CSS convention from CSS Tricks: https://css-tricks.com/snippets/css/clear-fix/, the normalize.css from http://github.com/necolas/normalize.css, the jQuery v3.2.1 library, and the handlebars.js library from https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js.
MarkedJS sourced from https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js, and HighlightJS sourced from https://highlightjs.org/.
