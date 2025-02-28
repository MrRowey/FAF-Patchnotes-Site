module.exports = {
    globDirectory: "src/_site",
    globPatterns: ["**/*.{html,css,svg,json,xml,js}"],
    swDest: "src/_site/service-worker.js",
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  };
  