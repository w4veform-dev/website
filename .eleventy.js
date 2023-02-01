const fs = require('fs');

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("ascii_header", function() {
        var data = fs.readFileSync("asciiname.txt");
        return `
        <div class="container mx-auto text-center">
            <pre class="font-bold bg-gradient-to-b from-cyan-400 via-cyan-100 to-pink-300 bg-clip-text" style="color: rgba(0, 0, 0, 0)">${data}</pre>
        </div>`;
    });
};