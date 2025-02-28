const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");
const glob = require("glob");
const { minify } = require("html-minifier-terser");

(async function () {
  const configuration = {
    caseSensitive: false,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: false,
    collapseWhitespace: true,
    conservativeCollapse: false,
    continueOnParseError: false,
    decodeEntities: true,
    minifyCSS: false, // we process these separately
    minifyJS: false, // we process these separately
    minifyURLs: false,
    preserveLineBreaks: false,
    processConditionalComments: false,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: false,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: false,
    sortAttributes: false,
    sortClassName: false,
    trimCustomFragments: true,
    useShortDoctype: true,
  };

  try {
    // Find all matching files
    const pattern = "src/_site/**/*.html";
    glob(pattern, async (err, files) => {
      if (err) {
        console.error("Error finding files:", err);
        return;
      }

      for (const file of files) {
        const inputPath = resolve(file);
        const outputPath = inputPath.replace(/\.html$/, ".html");

        try {
          const htmlContent = readFileSync(inputPath, "utf8");
          const minified = await minify(htmlContent, configuration);

          // Overwrite source file
          writeFileSync(outputPath, minified, "utf8");
          console.log(`Minified ${file} -> ${outputPath}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    });
  } catch (err) {
    console.error("Error finding files:", err);
  }
})();
