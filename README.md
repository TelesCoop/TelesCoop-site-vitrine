# telescoop

## How to install the project ?

The project use eleventy as a static files generator built with JavaScript.
In order to setting up the project, you need to install globally the eleventy library:

# with yarn

`yarn global add @11ty/eleventy`

# with npm

`npm install -g @11ty/eleventy`

Notes: Eleventy is available on npm and requires version 8 of Node.js or higher.

then, you need to start the server with this command:

`eleventy --serve`

If you have some issues with the Javascript and CSS files (missing files or what else), you probably need to copy the content of the Javascript and CSS in the _\_site_ folder.

The easy way, is to uncomment the functions called a pass through in _eleventy.js_ file configuration.
Steps:

1. Go to the _.eleventy.js_ file
2. Uncomment the functions:
   `eleventyConfig.addPassthroughCopy("js");`
   `eleventyConfig.addPassthroughCopy('css')`
3. Start the server
   `eleventy --serve`

## How to deploy on the production server ?

with makefile:
'''
make deploy
'''

from production server,

- `git pull`
- `ln -s /root/telescoop/telescoop-nginx.conf /etc/nginx/sites-enabled/`
