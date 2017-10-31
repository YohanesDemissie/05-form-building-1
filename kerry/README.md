![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 05: Form Building Workshop
===

## Submission Instructions
Follow the submission instructions from Lab 01.

## Resources  
[HighlightJS Docs](https://highlightjs.org/)

[MarkedJS Docs](https://github.com/chjj/marked)

## Configuration
_Your repository must include:_

```
05-form-building
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── new.html
├── scripts
│   ├── article.js
│   ├── articleView.js
│   └── blogArticles.js
├── styles
│   ├── base.css
│   ├── fonts
│   │   ├── icomoon.eot
│   │   ├── icomoon.svg
│   │   ├── icomoon.ttf
│   │   └── icomoon.woff
│   ├── icons.css
│   ├── layout.css
│   └── modules.css
└── vendor
    └── styles
        ├── default.css
        ├── normalize.css
        └── railscasts.css
```


## Feature Tasks

- Continue styling the app using SMACSS practices. Take a few minutes for code review of your partner's CSS and decide how to incorporate it into your paired lab. You can choose one partner's CSS structure, or you can combine them as you see fit. Seek to optimize and organize your CSS as much as possible!

*As a user, I want to be able to add new articles to my blog app so that it can stay current over time.*

- Review the image `preview.png` in the lab directory to get an idea of what we will be building.
- Focus on the functionality of adding a new article through a form submission by completing the TODOs in articleView.js.
- The new page with the form should provide a JSON string which can be copy/pasted into the data file to add articles to the blog.

*As a developer, I want to make the user experience easy to understand so that the user will want to return to the blog.*

- We now have two pages in our blog app, each of which need different initialization. There is a skeleton of a method in articleView.js to get this started for the new page; be sure to examine how this is now being done for the index page.
- The new page with the form will need event handling and a template. Where should these pieces go in the code?
- The new page should not display any other articles

### Stretch Goal
*As a user, I want to add highlighting and Markdown formatting so that it is attractive to guests visiting my app.*

- We have two new libraries that we can add: HighlightJS (provides syntax highlighting of code blocks) and MarkedJS (allows use of Markdown format text). Link to (or include) these two libraries and implement them.

## Documentation
_Your README.md must include:_

```md
# Project Name

**Author**: Kerry Nordstrom
**Version**: 1.0.1 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- This project will take in user input in the form of a blog article and will display a JSON result which the user will need to copy and paste into a raw data file of other articles for display on the main index page. -->

## Getting Started
<!-- The user must fork and clone the repository from the Codefellows 301 repository then add functionality prescribed in the readme. -->

## Architecture
<!-- This application serves to take in the user's name, text, title of article, url, and category, then prepare a JSON object containing this information.  With this, it can be added to the raw data file and prepared for display on the index page.   

Languages: HTML, JavaScript.
Libraries: normalize.css, JQuery, icomoon.-->

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

10-30-2017 8:35am - Application has partially functional new.html page where the JSON autofills, but the new article does not display on the index page.

10-30-2017 1:30pm - Enabled functionality which allows preview tab navigation on new.html

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```
