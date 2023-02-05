const fs = require('fs');
const MarkdownIt = require('markdown-it');
const dateFilter = require('./src/filters/dateFilter.js');

module.exports = function(eleventyConfig) {
    // Passthroughs //
    eleventyConfig.addPassthroughCopy("src/assets");
    
    // Filters //
    eleventyConfig.addFilter('dateFilter', dateFilter);
    eleventyConfig.addFilter('md', function(text) {
        var rendered = new MarkdownIt().render(text);
        return rendered;
    });

    // Collections //
    eleventyConfig.addCollection('tagsList', (collectionApi) => {
        const tagsSet = new Set()
        collectionApi.getAll().forEach((item) => {
          if (!item.data.tags) return
          item.data.tags.forEach((tag) => tagsSet.add(tag))
        })
        return tagsSet
      })      

    // Base Config //
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "includes",
            layouts: "includes/layouts",
            data: "data"
        }
    };
};