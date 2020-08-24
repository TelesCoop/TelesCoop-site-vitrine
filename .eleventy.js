module.exports = function (eleventyConfig) {
  // it allows to copy the css and js in the _site folder
  // eleventyConfig.addPassthroughCopy("js");
  // eleventyConfig.addPassthroughCopy('css')

  // You can return your Config object (optional).
  return {
    // passthroughFileCopy: true,
    dir: {
      input: ".",
      output: "_site"
    }
  };
};