import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { glob } from "glob";
import postcss from "postcss";
import cssnano from "cssnano";

(async () => {
  try {
    // Find all matching files
    const pattern = "src/_site/**/*.css";
    const files = await glob(pattern);

    for (const file of files) {
      const inputPath = resolve(file);
      const outputPath = inputPath.replace(/\.css$/, ".css");

      try {
        const cssContent = readFileSync(inputPath, "utf8");

        // Process the CSS with PostCSS and cssnano
        const result = await postcss([cssnano()]).process(cssContent, {
          from: inputPath,
          to: outputPath,
        });

        // Overwrite source file
        writeFileSync(outputPath, result.css, "utf8");
        console.log(`Minified ${file} -> ${outputPath}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  } catch (err) {
    console.error("Error finding files:", err);
  }
})();
