import userDocBase from "@devices-lab/user-doc-base";
import docToc from "@johnvidler/11ty-doc-toc";
import path from "node:path";

export default async function(eleventyConfig, options = {}) {
    const inputDir = options.inputDir || "src";
    const outputDir = options.outputDir || "_site";
    const layoutsDir = options.layoutsDir || "_layouts";
    
    // Register user-doc-base plugin with this project's input dir
    await userDocBase(eleventyConfig, { inputDir: inputDir, syncChanges: true });
    
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
    
    const toc = await docToc(eleventyConfig, { root: inputDir });
    await toc.addChapterPackage();
    
    return {
        dir: {
            input: inputDir,
            output: outputDir,
            layouts: layoutsDir  // Standard layouts dir (will be populated by plugin)
        },
        templateFormats: ["md", "njk", "html", "css"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
}