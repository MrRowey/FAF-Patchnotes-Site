source "https://rubygems.org"

gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]

# If you have any plugins, put them here!
group :jekyll_plugins do

  # Generates the RSS feed.
  # - https://github.com/jekyll/jekyll-feed
  gem "jekyll-feed"

  # Enables URL redirections for moved/renamed pages.
  # - https://github.com/jekyll/jekyll-redirect-from
  gem "jekyll-redirect-from"

  # Exposes repository metadata (useful for Jekyll-based GitHub Pages).
  # - https://github.com/jekyll/github-metadata
  gem "jekyll-github-metadata"

  # Generates meta tags for improved search engine optimization (SEO).
  # - https://github.com/jekyll/jekyll-seo-tag
  gem "jekyll-seo-tag"

  # Enables pagination support.
  # - https://github.com/jekyll/jekyll-paginate
  gem "jekyll-paginate"

  # Creates individual pages for each category.
  # - https://github.com/field-theory/jekyll-category-pages
  gem "jekyll-category-pages"

  # Generates an XML sitemap to improve SEO.
  # - https://github.com/jekyll/jekyll-sitemap
  gem "jekyll-sitemap"

end

# Performance booster for watching directories on Windows.
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds for compatibility.
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
