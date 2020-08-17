module.exports = function(eleventyConfig) {
  // eleventyConfig.addPassthroughCopy("js");

  // You can return your Config object (optional).
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
