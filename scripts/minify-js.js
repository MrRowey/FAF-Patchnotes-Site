import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { glob } from "glob";
import { minify } from "uglify-js";

(async () => {
  const configuration = {
    compress: {
      drop_console: true,
      drop_debugger: true,
      passes: 2,
    },
    mangle: {
      toplevel: true,
    },
    output: {
      beautify: false,
      comments: "some", // Retain comments marked with `/*!`
    },
    warnings: true,
  };

  try {
    // Find all matching files
    const pattern = "src/_site/**/*.js";
    const files = await glob(pattern);

    for (const file of files) {
      const inputPath = resolve(file);
      const outputPath = inputPath.replace(/\.js$/, ".js");

      try {
        const code = readFileSync(inputPath, "utf8");

        // Minify the JavaScript code asynchronously
        const result = minify(code, configuration);

        if (result.error) {
          console.error(`Error minifying ${file}:`, result.error);
        } else {
          // Overwrite source file
          writeFileSync(outputPath, result.code, "utf8");
          console.log(`Minified ${file} -> ${outputPath}`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  } catch (err) {
    console.error("Error finding files:", err);
  }
})();
