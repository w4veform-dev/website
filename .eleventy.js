const fs = require('fs');

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("ascii_header", function() {
        var data = fs.readFileSync("asciiname.txt");
        return `
        <div class="container mx-auto text-center">
            <pre class="font-bold bg-gradient-to-b from-cyan-400 via-cyan-100 to-pink-300 bg-clip-text" style="color: rgba(0, 0, 0, 0)">${data}</pre>
        </div>`;
    });

    eleventyConfig.addShortcode("command_block", function(command, content_file) {
        var data = fs.readFileSync("./command_outputs/" + content_file, 'utf-8');
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
        </div>
        `;
    });
};