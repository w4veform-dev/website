const fs = require('fs');
const cleancss = require('clean-css');
const MarkdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
    // Passthroughs //
    eleventyConfig.addPassthroughCopy("assets");

    // Layouts //
    eleventyConfig.addLayoutAlias("base", "layouts/layout.njk")

    // Shortcodes //
    eleventyConfig.addShortcode("command_block", function(command, content_file) {
        var data = fs.readFileSync("./src/content/command_outputs/" + content_file, 'utf-8');
        var rendered = new MarkdownIt().render(data);
        return `
        <div class="px-10">
            <div class="mx-auto max-w-screen-2xl border-2 border-cyan-400">
                <div class="px-1 w-full bg-cyan-400 text-[#1A1C23]">
                    <span>&lambda; ${command}</span>
                </div>
                <div class="p-3">
                    ${rendered}
                </div>
            </div>
        </div>`;
    });
    
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