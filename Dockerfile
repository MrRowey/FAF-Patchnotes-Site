# Use the Debian-based Ruby slim image
FROM ruby:3.4.2-slim

# Copy the Gemfile and Gemfile.lock into the image
WORKDIR /src
COPY src/Gemfile /src/Gemfile
COPY src/Gemfile.lock /src/Gemfile.lock

# Set environment variables
ENV BUNDLE_HOME=/usr/local/bundle
ENV BUNDLE_APP_CONFIG=/usr/local/bundle
ENV BUNDLE_DISABLE_PLATFORM_WARNINGS=true
ENV BUNDLE_BIN=/usr/local/bundle/bin
ENV GEM_HOME=/usr/gem
ENV GEM_BIN=/usr/gem/bin

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recomends \
    build-essential \
    zlib1g-dev \
    git \
    imagemagick \
    # Install Dependencies for Jekyll
    gem install bundler -v 2.6.2 && \
    gem install jekyll && \
    # Install gems for the site
    bundle install --no-cache && \
    # Clean up images \
    gem clean && \
    apt-get remove -y build-essential && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/* /usr/local/bundle/cache /usr/gem/cache