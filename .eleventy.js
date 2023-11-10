const svgContents = require('eleventy-plugin-svg-contents');
const fs = require("fs");
const yaml = require("js-yaml");


module.exports = function(eleventyConfig) {
    // Copy the static assets to the output folder
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy({"utils/*": "/" });
    eleventyConfig.addPlugin(svgContents);
    eleventyConfig.addWatchTarget("./css/*.css");

    // add YAML support
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addFilter("filteredPosts", function(values, filters) {
    return values
  });
  eleventyConfig.addFilter("addFiltersClass", function(values) {
    return values.join( " ")
  });

    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
          ready: function(err, bs) {
            bs.addMiddleware("*", (req, res) => {
              const content_404 = fs.readFileSync('_site/404.html');
              // Provides the 404 content without redirect.
              res.write(content_404);
              // Add 404 http status code in request header.
              // res.writeHead(404, { "Content-Type": "text/html" });
              res.writeHead(404);
              res.end();
            });
          }
        }
      });


    // You can return your Config object (optional).
    return {
        passthroughFileCopy: true,
        dir: {
            input: '.',
            output: '_site',
        },
    };
};
