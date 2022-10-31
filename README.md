# Telescoop website

## Install the project

The project uses **eleventy** as a static files generator built with JavaScript. We use the templating langage Nunjucks
as an engine to generate HTML files.

In order to setting up the project, you need to install globally the eleventy library:

# with yarn

`yarn global add @11ty/eleventy`

# with npm

`npm install -g @11ty/eleventy`

Notes: Eleventy is available on npm and requires version 8 of Node.js or higher.

## Run the project locally

Start the local server with `make serve`.

If you have some issues with the Javascript and CSS files (missing files or what else), you probably need to copy the
content of the Javascript and CSS in the _\_site_ folder.

The easy way, is to uncomment the functions called a pass through in `eleventy.js` file configuration.
Steps:

1. Go to the `.eleventy.js` file
2. Uncomment the functions:
   `eleventyConfig.addPassthroughCopy("js");`
   `eleventyConfig.addPassthroughCopy('css')`
3. Start the server
   `make serve`

## Deploy to the production server

Use `deploy` folder.