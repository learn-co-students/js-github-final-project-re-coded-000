# JavaScript Final Project

## Objectives
+ use JS basics, jQuery, AJAX + API calls, and OO to build project

## Intro

It's time to put all your JavaScript skills to the test to build an app combining everything you've learned about JavaScript so far. At Flatiron School, we rely heavily on traditional git work flow to manage our curriculum. A huge part of that means opening issues when you find something that needs to be fixed or updated on a piece of curriculum.

Typically, we open an issue directly through GitHub's browser interface. But, we can actually use their API endpoint to open issues in our own app. GitHub's API only let's you create an issue if you have pull access to the repo.

## Instructions


You'll be coding your solution in `js/script.js`.
You'll need to visit [GitHub](https://github.com/settings/tokens) to create an access token for your application.

In `index.html` you'll find a form with four input fields, for repository name, repository owner, issue title, and issue body.

In `js/script.js` you'll need to define a function that submits the form `submitForm`. This function should call a function `createIssue`.

The `createIssue` function should make an Ajax `POST` request to the Github API  [create issue end point](https://developer.github.com/v3/issues/#create-an-issue).
This endpoint should create an issue based on the information the user entered in the form. Once the form has been submitted, you'll want to add a link to the page to enter a repo name (thus you'll want to make sure the page doesn't refresh on form submission).

If the POST request fails, the function should print out `Post error: error_name`to the console.
