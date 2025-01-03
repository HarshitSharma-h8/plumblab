import MarkdownIt from "markdown-it";

export default function (eleventyConfig) {
  //   eleventyConfig.addPassthroughCopy("./src/style/style.css");
  //   eleventyConfig.addPassthroughCopy("./src/javascript/index.js");
  //   eleventyConfig.addPassthroughCopy("./src/assets");

  const markdownItInstance = MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  });
  eleventyConfig.setLibrary("md", markdownItInstance);
  eleventyConfig.addFilter("markdown", (content) => {
    return markdownItInstance.render(content || "");
  });

  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  eleventyConfig.addPassthroughCopy("src/style");
  eleventyConfig.addPassthroughCopy("src/javascript");

  eleventyConfig.addWatchTarget("./src/style/");
  eleventyConfig.addWatchTarget("./src/javascript/");

  eleventyConfig.addPassthroughCopy("./src/assets");

  // dotenv
  eleventyConfig.addGlobalData("env", process.env);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
