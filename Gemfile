source "https://rubygems.org"

gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]

# If you have any plugins, put them here!
group :jekyll_plugins do

  # Used to automatically generate the RRS feed
  # - https://github.com/jekyll/jekyll-feed

  gem "jekyll-feed"

  # Used to provide us with the capability to redirect users. 
  # - https://github.com/jekyll/jekyll-redirect-from

  gem "jekyll-redirect-from"

  # Used to expose metadata of the repository.
  # - https://github.com/jekyll/github-metadata

  gem "jekyll-github-metadata"

  # Used to generate (meta) tags for search engine optimization (SEO).
  # - https://github.com/jekyll/jekyll-seo-tag

  gem "jekyll-paginate"

  # Used to generate a page for each category.
  # - https://github.com/field-theory/jekyll-category-pages

  gem "jekyll-category-pages"

  # Used to generate a sitemap that is useful for Search Engine Optimization (SEO).
  # - https://github.com/jekyll/jekyll-sitemap

  gem 'jekyll-sitemap'

  # Used to generate images of various sizes and formats to speed up page loading on mobile phones.
  # - https://github.com/Garanas/jekyll-transcode-image-filters

  gem 'jekyll-transcode-image-filters', git: "https://github.com/Garanas/jekyll-transcode-image-filters"

end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]