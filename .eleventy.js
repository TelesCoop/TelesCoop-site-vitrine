const svgContents = require('eleventy-plugin-svg-contents');

module.exports = function(eleventyConfig) {
    // Copy the static assets to the output folder
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPlugin(svgContents);

    // You can return your Config object (optional).
    return {
        passthroughFileCopy: true,
        dir: {
            input: '.',
            output: '_site',
        },
    };
};