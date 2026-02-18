import userDocBase from "@devices-lab/user-doc-base";

export default async function(eleventyConfig, options = {}) {
    // Register user-doc-base plugin with this project's input dir
    await userDocBase(eleventyConfig, { inputDir: "src", syncChanges: true });

    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.jpeg");

    return {
        dir: {
            input: "src",
            output: "_site",
            layouts: "_layouts"  // Standard layouts dir (will be populated by plugin)
        },
        templateFormats: ["md", "njk", "html", "css"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
}