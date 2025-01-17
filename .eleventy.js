import {
  addPagesWithSchema,
  addBreadcrumbSchema,
} from "./src/resources/javascript/schemas.js";


import MarkdownIt from "markdown-it";

export default function (eleventyConfig) {
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

  // Breadcrumbs  filter
  function breadcrumbsFilter(url) {
    if (!url) return "";
    const segments = url.split("/").filter((segment) => segment); // Remove empty segments
    let currentPath = "";
    return segments
      .map((segment) => {
        currentPath += `/${segment}`;
        const displayName = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        return `<a href="${currentPath}" class="hover:underline">${displayName}</a>`;
      })
      .join(" / ");
  }

  // Breadcrumbs function call
  eleventyConfig.addFilter("breadcrumbs", breadcrumbsFilter);

  // Schemas 
  addPagesWithSchema(eleventyConfig);
  addBreadcrumbSchema(eleventyConfig);

  // Passthrough copy
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);

  eleventyConfig.addPassthroughCopy("src/resources/assets");
  eleventyConfig.addPassthroughCopy("src/resources/style");
  eleventyConfig.addPassthroughCopy("src/resources/javascript");

  eleventyConfig.addWatchTarget("./src/resources/style/");
  eleventyConfig.addWatchTarget("./src/resources/javascript/");
  eleventyConfig.addWatchTarget("./src/resources/schemas/");

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
